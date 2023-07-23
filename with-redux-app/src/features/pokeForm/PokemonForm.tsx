import { useState } from 'react'
import styles from "./index.module.css";

import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setInput,
  pokeSubmit,
  getGenre,
  getDetails,
  getPokeInput,
  getStatus,
  clearOpenAIOutput,
} from './pokeSlice'

function PokemonForm() {
  const dispatch = useAppDispatch()
  const pokeInput = useAppSelector(getPokeInput)
  const status =  useAppSelector(getStatus)
  const genre = useAppSelector(getGenre)
  const details = useAppSelector(getDetails)

  async function onSubmit(event: any) {
    event.preventDefault();
      dispatch(clearOpenAIOutput())
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
        {status == 'loading' ? <p>Loading...</p> : <p />}
        {status == 'success' ? <div>{`genre: ${genre}, details: ${details}`}</div> : <p />}
      </main>
    </div>
  );
}

export default PokemonForm