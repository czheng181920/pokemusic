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
import { useEffect } from 'react';

export default function TopScreen() {
  const pokedexnumber = useAppSelector(getPokedexNumber)
  // set up text to print, each item in array is new line
  var aText = new Array(
  "There are only 10 types of people in the world:", 
  "Those who understand binary, and those who don't"
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  
  return (
    <div className="wrapper-with-intrinsic-ratio topscreen-wrapper center">
      <div className="topscreen screen ">
        <div className="pure-u-g">{pokedexnumber}
          <div className="pure-u-1 centerY">
            <div className="profoak-container">
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
        <div className="pure-g bottom">
          <div className="pure-u-1">
            <div className="textbox">
              Welcome to Pokémusic! What does your favorite Pokémon listen to? Select below to find out.
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}