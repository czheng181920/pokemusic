import Image from 'next/image';
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
import { useEffect, useState } from 'react';
import { welcomeText } from './texts.js';
import TypeWriterText from './TypeWriterText';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import LoadingScreen from './LoadingScreen';

export default function TopScreen() {
  const pokedexnumber = useAppSelector(getPokedexNumber)
  const status = useAppSelector(getStatus)
  function renderScreen() {
    switch(status){
      case 'loading':
        return (<LoadingScreen />);
      case 'success':
        return (<Screen3 />);
      default:
        return (pokedexnumber == -1 ? <Screen1 /> : <Screen2 />);
    }
  }
  return (
    <div className="wrapper-with-intrinsic-ratio topscreen-wrapper center">
      <div className="topscreen screen ">
        {renderScreen()}
      </div>
    </div>
    )
}