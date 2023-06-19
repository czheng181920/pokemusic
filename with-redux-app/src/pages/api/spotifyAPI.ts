import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  access_token: string,
  token_type: string,
  expires_in: number
}

export default async function getSpotifySongs(req: any, res: any) { 
  var client_id = process.env.SPOTIFY_CLIENT_ID;
  var client_secret = process.env.SPOTIFY_CLIENT_SECRET;
 
  var testJSON = {
    q: `sea%20shanties`,
    type : `track`,
    limit: 2
  }
  var testURL = 'q=sea%2520shanties&type=track&limit=2'

  const obj = req.body.genre;  //supposed to look like testJSON
  const params = new URLSearchParams(obj).toString();
  console.log(params);

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

    //use access token to fetch info
    const songs = await fetch(`https://api.spotify.com/v1/search?${params}`,{
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

    res.status(200).json({ result: songsJSON });

  } catch(error:any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`AUTH SPOTIFY ERROR UGHHHHHH: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
 
