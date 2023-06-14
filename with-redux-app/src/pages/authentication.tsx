import type { NextPage } from 'next'

import styles from "./index.module.css";
import { useState } from 'react'

// export async function getStaticProps() {
//   const [result, setResult] = useState();

//   var client_id = process.env.SPOTIFY_CLIENT_ID;
//   var client_secret = process.env.SPOTIFY_CLIENT_SECRET;

//   (async function generateToken() {
//     try {
//       const response = await fetch('https://accounts.spotify.com/api/token', {
//         method: 'POST',
//         headers: {
//             'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: 'grant_type=client_credentials'
//       });

//       const data = await response.json();
//       if (response.status !== 200) {
//         throw data.error || new Error(`Request failed with status ${response.status}`);
//       }

//       setResult(data.access_token);
//     } catch(error: any) {
//       // Consider implementing your own error handling logic here
//       console.error(error);
//       alert(error.message);
//     }
//   })();
// }

// const Authentication: NextPage = () => {
//   const [result, setResult] = useState();

//   var client_id = process.env.SPOTIFY_CLIENT_ID;
//   var client_secret = process.env.SPOTIFY_CLIENT_SECRET;

//   (async function generateToken() {
//     try {
//       const response = await fetch('https://accounts.spotify.com/api/token', {
//         method: 'POST',
//         headers: {
//             'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: 'grant_type=client_credentials'
//       });

//       const data = await response.json();
//       if (response.status !== 200) {
//         throw data.error || new Error(`Request failed with status ${response.status}`);
//       }

//       setResult(data.access_token);
//     } catch(error: any) {
//       // Consider implementing your own error handling logic here
//       console.error(error);
//       alert(error.message);
//     }
//   })();

//   return (
//     <div className={styles.result}>{result}</div>
//   );
// }

// export default Authentication


import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  access_token: string,
  token_type: string,
  expires_in: number
}
 
export const getServerSideProps: GetServerSideProps<{
  repo: Repo, songsJSON: any
}> = async () => {

  var client_id = process.env.SPOTIFY_CLIENT_ID;
  var client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const res = await fetch('https://accounts.spotify.com/api/token',{
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });
  const repo = await res.json()
  var test = {
    q: `sea%20shanties`,
    type : `track`,
    limit: 2
  }
  const songs = await fetch('https://api.spotify.com/v1/search',{
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(test) //might have to use axios or something other than fetch api
  });
  const songsJSON = await songs.json()
  return { props: { repo, songsJSON } }
}
 
export default function Authentication({
  repo, songsJSON
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {/* Display the fetched data */}
      {repo && <p>{repo.access_token}</p>}
      {songsJSON && <p>{songsJSON.items[0].name}</p>}

      {songsJSON && <p>{songsJSON.items[0].external_urls.spotify}</p>}
    </div>
  )
}


