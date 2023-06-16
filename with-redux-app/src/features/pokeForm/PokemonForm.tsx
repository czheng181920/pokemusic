import { useState } from 'react'
import styles from "./index.module.css";

import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setInput,
  pokeSubmit,
  getOpenaiOutput,
  getPokeInput,
  getStatus,
} from './pokeSlice'

function PokemonForm() {
  const dispatch = useAppDispatch()
  const pokeInput = useAppSelector(getPokeInput)
  const status =  useAppSelector(getStatus)
  const openAIResponse = useAppSelector(getOpenaiOutput)
  
  async function onSubmit(event: any) {
    event.preventDefault();
      dispatch(pokeSubmit(pokeInput))
  }

  return (
    <div>
      <main className={styles.main}>
        <h3>what does your fav pokemon listen to?</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="pokemon"
            placeholder="Enter a pokemon"
            value={pokeInput}
            onChange={(e) => dispatch(setInput(e.target.value))}
          />
          <input type="submit" value="Generate Music" />
        </form>
        {status == 'loading' ? <p>Loading...</p> : <div>{openAIResponse}</div>}
      </main>
    </div>
  );
}

export default PokemonForm