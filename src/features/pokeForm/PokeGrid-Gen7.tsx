import Image from 'next/image';
import pokenames from './pokemonMasterlist.json';
import { JSX } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setInput,
  setCurrentPokedexNumber,
  getPokedexNumber,
  getGen,
} from './pokeSlice'
import SelectArrow from '../background/SelectArrow';

export default function PokeGrid() {
  const dispatch = useAppDispatch()

  let pokeImgList: JSX.Element[]  = [];

  function dispatchPokemon(pokename: string, pokedexNum: number){
    dispatch(setInput(pokename))
    dispatch(setCurrentPokedexNumber(pokedexNum))
  }
  const pokedexnumber = useAppSelector(getPokedexNumber)
  const genNumber = useAppSelector(getGen)
  var start = 1;
  var end = 1;
  if ( pokenames.gen[genNumber].start && pokenames.gen[genNumber].end ){
    start = pokenames.gen[genNumber].start as number;
    end = pokenames.gen[genNumber].end as number;
  } //maybe put error handling if it doesnt exist lol
  for (let i = start; i <= end; i++){
    pokeImgList.push(
      <button 
        type="button" 
        className="gridcell7 center-bottom" 
        key={pokenames.names[i]}
        onClick={(e) => dispatchPokemon(pokenames.names[i], i)}
      >
        <div className="crop7">
          <Image 
            className="gen-7-icons" 
            src={`/pokeicons/icons-gen7/${i}.png`} 
            alt={"Select " + pokenames.names[i]} 
            fill
            sizes="30vw"
          />
        </div>
        {pokedexnumber == i ? <SelectArrow /> : <div className="div"></div> }
      </button>
    )
  }
  return (
    <div className="pokegrid">
      {pokeImgList}
    </div>
  )
}