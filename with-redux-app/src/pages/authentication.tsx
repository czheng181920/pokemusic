import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  access_token: string,
  token_type: string,
  expires_in: number
}
 
export const getServerSideProps: GetServerSideProps<{
  [key: string]: any;
}> = async () => {
  var client_id = process.env.SPOTIFY_CLIENT_ID;
  var client_secret = process.env.SPOTIFY_CLIENT_SECRET;
 
  var testJSON = {
    q: `sea%20shanties`,
    type : `track`,
    limit: 2
  }
  var testURL = 'q=sea%20shanties&type=track&limit=2'

  try{
    //get access token
    const res = await fetch('https://accounts.spotify.com/api/token',{
      method: 'POST',
      headers: {
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });
    const repo = await res.json()

    //use access token to fetch info
    const songs = await fetch('https://api.spotify.com/v1/search?q=sea%2520shanties&type=track&limit=2',{
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

    return { props: { songsJSON } }
  } catch(error:any) {
    console.error("AUTH ERROR UGH", error)
    return { props: { "theres an error": "lol" } }
  }
}
 
export default function Authentication({
   songsJSON
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {/* Display the fetched data */}
      {songsJSON && <p>{songsJSON.tracks.items[0].name}</p>}
      {songsJSON && <p>{songsJSON.tracks.items[0].external_urls.spotify}</p>}
    </div>
  )
}
