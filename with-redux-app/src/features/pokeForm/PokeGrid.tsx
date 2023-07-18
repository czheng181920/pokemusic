import Image from 'next/image';
import styles from "./index.module.css";
import pokenames from './pokemonMasterlist.json';
import { JSX, useState } from 'react';
export default function PokeGrid() {
  let pokeImgList: JSX.Element[]  = [];
  pokenames.gen1.forEach((pokename, pokedexNum) => {
    pokeImgList.push(
      <div className="gridcell center-bottom" key={pokename}>
        <div className="crop">
          <Image 
            className="imgThm" 
            src={`/pokeicons/icons/${pokedexNum+1}.png`} 
            alt={pokename} 
            fill
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw"
          />
        </div>
      </div>
    )
  })
  return (
    <div className="pokegrid">
      {pokeImgList}
    </div>
  )
}