import Image from 'next/image';
import styles from "./index.module.css";
import pokenames from './pokemonMasterlist.json';
import { JSX, useState } from 'react';
export default function PokeGrid() {
  const width = 100;
  const height = 100;
  let pokeImgList: JSX.Element[]  = [];
  pokenames.gen1.forEach((pokename, pokedexNum) => {
    pokeImgList.push(
      <div key={pokename}>
        <Image className={styles.imgThm} src={`/pokesprites/gen1/${pokedexNum+1}.png`} alt={pokename} width={width} height={height}/>
      </div>
    )
  })
  return (
    <div className={styles.container}>
      {pokeImgList}
    </div>
  )
}