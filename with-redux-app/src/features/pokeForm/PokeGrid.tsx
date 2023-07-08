import Image from 'next/image';
import styles from "./index.module.css";
import pokenames from './pokemonMasterlist.json';
import { JSX, useState } from 'react';
export default function PokeGrid() {
  let pokeImgList: JSX.Element[]  = [];
  pokenames.gen1.forEach((pokename, pokedexNum) => {
    pokeImgList.push(
      <div className="gridcell" key={pokename}>
        <Image className="imgThm" src={`/pokesprites/gen1/${pokedexNum+1}.png`} alt={pokename} fill={true}/>
      </div>
    )
  })
  return (
    <div className="pokegrid">
      {pokeImgList}
    </div>
  )
}