const console = require('console'); //debugging
import spotifyPreviewFinder from 'spotify-preview-finder';

// Because Spotify has depreciated their API for song previews, we use the spotify-preview-finder package
async function fetchSongPreviewURL(songName: string, limit: number = 5) {
  try {
    // Get preview URLs for a song (limit is optional, default is 5)
    const result = await spotifyPreviewFinder(songName, limit);

    if (result.success) {
      return result.results[0].spotifyUrl; // Return the first song's Spotify URL
    } else {
      console.error('Error:', result.error);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Error:', error);
    }
  }
}

function addSongPreviewsToResponse(songs: any[]) {
  return Promise.all(
    songs.map(async (song) => {
      const previewUrl = await fetchSongPreviewURL(song.name);
      return {
        ...song,
        url: previewUrl || [],
      };
    })
  );
}

export default async function getSpotifySongs(req: any, res: any) {
  const console = require('console');

  var client_id = process.env.SPOTIFY_CLIENT_ID;
  var client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  // const obj = req.body; //supposed to look like testJSON
  // const paramsobj = new URLSearchParams(obj);
  const rawQuery = req.body.q?.trim(); // remove leading/trailing spaces

  if (!rawQuery) {
    return res.status(400).json({ error: 'Missing or empty query string' });
  }

  const paramsobj = new URLSearchParams({
    q: rawQuery,
    type: 'playlist',
    limit: '1',
  }).toString();
  var params = paramsobj.toString();
  var trackNum = 0;
  var itemsResponse = [];

  try {
    //get access token
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    const repo = await response.json();

    //fetching playlists..
    const playlists = await fetch(
      `https://api.spotify.com/v1/search?${params}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${repo.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const playlistsJSON = await playlists.json();
    if (playlists.status !== 200) {
      throw (
        playlistsJSON.error ||
        new Error(`Request failed with status ${playlists.status}`)
      );
    }

    // go through the list of playlists and find the first one with six tracks
    if (!playlistsJSON.playlists || !playlistsJSON.playlists.items) {
      console.error('Playlists missing in search response:', playlistsJSON);
      return res.status(404).json({ error: 'Playlists not found in search' });
    }
    const playlist = playlistsJSON.playlists.items.find(
      (item: any) => item?.tracks && item.tracks.total >= 6
    );

    if (!playlist) {
      console.error('No playlist found with at least 6 tracks');
      return res.status(404).json({ error: 'No suitable playlist found' });
    }
    // check for correct structure of playlist
    if (!playlist.tracks || !playlist.tracks.href) {
      console.error('Playlist tracks missing or malformed:', playlist);
      return res.status(404).json({ error: 'Playlist tracks not found' });
    }
    console.log(
      `Found playlist: ${playlist.name} with ${playlist.tracks.total} tracks`
    );

    //fetching playlist tracks
    const songs = await fetch(
      `${playlist.tracks.href}`, //'tracks' is null here sometimes
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${repo.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const songsJSON = await songs.json();
    if (songs.status !== 200) {
      throw (
        songsJSON.error ||
        new Error(`Request failed with status ${songs.status}`)
      );
    }

    //don't want to get all the songs in the beginning of the playlist (usually results in repeat artists)
    //to get a variety of songs, space out the indicies
    var i = 0;
    while (trackNum < 6 && i < songsJSON.items.length) {
      if (songsJSON.items[i].track.type == 'track') {
        itemsResponse.push(songsJSON.items[i].track);
        trackNum++;
      }
      i += Math.floor(songsJSON.items.length / 6);
    }
    //if there are not enough songs (6 songs) in the playlist, just default to searching tracks
    if (trackNum < 6) {
      var numTracksLeft: number = 6 - trackNum;
      const paramsobj2 = new URLSearchParams({
        q: rawQuery,
        type: 'track',
        limit: `${numTracksLeft}`,
      }).toString();
      var params2 = paramsobj2.toString();
      const songs2 = await fetch(
        `https://api.spotify.com/v1/search?${params2}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${repo.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const songs2JSON = await songs2.json();
      if (songs2.status !== 200) {
        throw (
          songs2JSON.error ||
          new Error(`Request failed with status ${songs2.status}`)
        );
      }

      // Check if songs2JSON has the expected structure
      if (!songs2JSON.tracks || !songs2JSON.tracks.items) {
        console.error('Tracks missing in search response:', songs2JSON);
        return res.status(404).json({ error: 'Tracks not found in search' });
      }
      itemsResponse.push(...songs2JSON.tracks.items);
    }
    // Add song previews to the response
    itemsResponse = await addSongPreviewsToResponse(itemsResponse);

    res.status(200).json({ result: itemsResponse });
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`SPOTIFY ERROR UGHHHHHH: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
}
