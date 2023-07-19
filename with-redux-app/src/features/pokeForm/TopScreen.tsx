import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setInput,
  setCurrentPokedexNumber,
  pokeSubmit,
  getOpenaiOutput,
  getPokeInput,
  getPokedexNumber,
  getStatus,
  clearOpenAIOutput,
} from './pokeSlice'
import { useEffect, useState } from 'react';
import { welcomeText } from './texts.js';
import TypeWriterText from './TypeWriterText';

export default function TopScreen() {
  const pokedexnumber = useAppSelector(getPokedexNumber)
  return (
    <div className="wrapper-with-intrinsic-ratio topscreen-wrapper center">
      <div className="topscreen screen ">
        <div className="pure-u-g">
          <div className="pure-u-1 centerY">
            <div className="profoak-container">
              {/* {pokedexnumber} */}
              <Image 
                className="profOak" 
                src={`/backgrounds/prof-oak.png`} 
                alt="professor-oak"
                fill
                sizes="20vw"
              />
            </div>
          </div>
        </div>
        <div className="pure-u-1 bottom">
          <TypeWriterText text={welcomeText}/>
        </div>
      </div>
    </div>
    )
}