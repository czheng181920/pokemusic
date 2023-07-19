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
import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default function TopScreen() {
  const pokedexnumber = useAppSelector(getPokedexNumber)
  return (
    <div className="wrapper-with-intrinsic-ratio topscreen-wrapper center">
      <div className="topscreen screen ">
        {pokedexnumber == -1 ? <Screen1 /> : <Screen2 />}
      </div>
    </div>
    )
}