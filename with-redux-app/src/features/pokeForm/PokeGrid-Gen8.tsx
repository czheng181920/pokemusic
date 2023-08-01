import Image from 'next/image';
import pokenames from './pokemonMasterlist.json';
import { JSX } from 'react';
// TODO: implement this for gen 8 and above
export default function PokeGrid() {
  let pokeImgList: JSX.Element[]  = [];
  pokenames.gen1.forEach((pokename, pokedexNum) => {
    pokeImgList.push(
      <div className="gridcell center-bottom" key={pokename}>
        <div className="crop">
          <Image 
            className="imgThm" 
            src={`/pokeicons/icons-gen8/${pokedexNum}.png`} 
            alt={pokename} 
            // width={68}
            // height={56}
            fill
            sizes="30vw"
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