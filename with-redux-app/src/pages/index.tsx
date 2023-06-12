import type { NextPage } from 'next'
import Head from 'next/head'

import styles from "./index.module.css";
import { useState } from 'react'

const IndexPage: NextPage = () => {
  const [pokemonInput, setPokemonInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pokemon: pokemonInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setPokemonInput("");
    } catch(error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
      </Head>

      <main className={styles.main}>
        <h3>what does your fav pokemon listen to?</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="pokemon"
            placeholder="Enter a pokemon"
            value={pokemonInput}
            onChange={(e) => setPokemonInput(e.target.value)}
          />
          <input type="submit" value="Generate Music" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

export default IndexPage
