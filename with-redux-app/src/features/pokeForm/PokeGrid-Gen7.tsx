import Image from 'next/image';
import styles from "./index.module.css";
import pokenames from './pokemonMasterlist.json';
import { JSX, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setInput,
  setCurrentPokedexNumber,
  pokeSubmit,
  getPokeInput,
  getPokedexNumber,
  getStatus,
  clearOpenAIOutput,
} from './pokeSlice'
import SelectArrow from '../background/SelectArrow';

export default function PokeGrid() {
  const dispatch = useAppDispatch()

  let pokeImgList: JSX.Element[]  = [];

  function dispatchPokemon(pokename: string, pokedexNum: number){
    dispatch(setInput(pokename))
    dispatch(setCurrentPokedexNumber(pokedexNum + 1))
  }
  const pokedexnumber = useAppSelector(getPokedexNumber)
  
  pokenames.gen1.forEach((pokename, pokedexNum) => {
    pokeImgList.push(
      <div className="gridcell7 center-bottom" key={pokename}>
        <div className="crop7">
          <Image 
            className="gen-7-icons" 
            src={`/pokeicons/icons-gen7/${pokedexNum+1}.png`} 
            alt={pokename} 
            fill
            sizes="30vw"
            onClick={(e) => dispatchPokemon(pokename, pokedexNum)}
          />
        </div>
        {pokedexnumber == pokedexNum+1 ? <SelectArrow /> : <div className="div"></div> }
      </div>
    )
  })
  return (
    <div className="pokegrid">
      {pokeImgList}
    </div>
  )
}