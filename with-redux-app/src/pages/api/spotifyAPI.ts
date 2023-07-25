import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Repo = {
  access_token: string,
  token_type: string,
  expires_in: number
}
const console = require('console');


export default async function getSpotifySongs(req: any, res: any) { 
  const console = require('console');

  var client_id = process.env.SPOTIFY_CLIENT_ID;
  var client_secret = process.env.SPOTIFY_CLIENT_SECRET;
 
  const obj = req.body;  //supposed to look like testJSON
  const paramsobj = new URLSearchParams(obj);
  paramsobj.append("type", "playlist");
  paramsobj.append("limit", "1")
  var params = paramsobj.toString();
  var trackNum = 0;
  var itemsResponse = [];

  try{
    //get access token
    const response = await fetch('https://accounts.spotify.com/api/token',{
      method: 'POST',
      headers: {
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });
    const repo = await response.json()

    //fetching playlists..
    const playlists = await fetch(`https://api.spotify.com/v1/search?${params}`,{
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${repo.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    const playlistsJSON = await playlists.json()
    if (playlists.status !== 200) {
      throw playlistsJSON.error || new Error(`Request failed with status ${playlists.status}`);
    }
    console.log(playlistsJSON.playlists.items[0].tracks.href);
    

    //fetching playlist tracks
    const songs = await fetch(`${playlistsJSON.playlists.items[0].tracks.href}?limit=6`,{
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${repo.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    const songsJSON = await songs.json()
    if (songs.status !== 200) {
      throw songsJSON.error || new Error(`Request failed with status ${songs.status}`);
    }
    for (var item of songsJSON.items){
      if (item.track.type == "track"){
        itemsResponse.push(item.track)
        trackNum++;
      }
    }

    //if there are not enough songs (6 songs) in the playlist, just default to searching tracks
    if (trackNum < 6){
      var paramsobj2 = new URLSearchParams(obj);
      var numTracksLeft: number = 6 - trackNum;
      paramsobj2.append("type", "track");
      paramsobj2.append("limit", `${numTracksLeft}`)
      var params2 = paramsobj2.toString();
      const songs2 = await fetch(`https://api.spotify.com/v1/search?${params2}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${repo.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
      });
      const songs2JSON = await songs2.json()
      if (songs2.status !== 200) {
        throw songs2JSON.error || new Error(`Request failed with status ${songs2.status}`);
      }
      itemsResponse.push(...songs2JSON.tracks.items);
    }

    res.status(200).json({ result: itemsResponse });

  } catch(error:any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`SPOTIFY ERROR UGHHHHHH: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
 
