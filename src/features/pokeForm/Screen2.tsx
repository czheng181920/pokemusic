import Image from 'next/image';
import { selectText } from './texts.js';
import Text from './Text';
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  pokeSubmit,
  getPokeInput,
  getPokedexNumber,
  clearPokeInput,
} from './pokeSlice'
import { useState } from 'react';
import SelectArrow2 from '../background/SelectArrow2';

export default function Screen2() {
  const dispatch = useAppDispatch()

  const pokedexnumber = useAppSelector(getPokedexNumber)
  const pokename = useAppSelector(getPokeInput)
  const[hoverYes,setHoverYes] = useState(false);
  const[hoverNo,setHoverNo] = useState(false);
  const[focusYes,setFocusYes] = useState(false);
  const[focusNo,setFocusNo] = useState(false);
  const pokeInput = useAppSelector(getPokeInput)

  function submitPoke(){
    dispatch(pokeSubmit(pokeInput))
  }

  return (
    <div className="">
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="selected-pokemon-name-container">
            <Image 
              className="master-ball" 
              src={`/backgrounds/master-ball.png`} 
              alt=''
              fill
              sizes="50vw"
            />
            <div className="pokename">
              {pokename.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="pure-u-1 centerY">
          <div className="selected-pokemon-container">
            <Image 
              className="selected-poke" 
              src={`/official-artwork/${pokedexnumber}.png`} 
              alt={pokename}
              fill
              sizes="50vw"
            />
          </div>
        </div>
        
      </div>
      <div className="pure-u-1 bottom">
        <div className="rightflex">
          <div className="select-pokemon">
            <div className="textbox select">
              <button 
                type='submit'
                className="yes pointer-cursor"
                onClick={(e) => submitPoke()}
                onMouseOver={(e) => setHoverYes(true)}
                onMouseOut={(e) => setHoverYes(false)}
                onFocus={(e) => setFocusYes(true)}
                onBlur={(e) => setFocusYes(false)}
              >
                YES
                { hoverYes || (focusYes && !hoverNo) ? <SelectArrow2 /> : <div className=""></div> }
              </button>
              <button 
                type='button'
                className="no pointer-cursor"
                onClick={(e) => dispatch(clearPokeInput())}
                onMouseOver={(e) => setHoverNo(true)}
                onMouseOut={(e) => setHoverNo(false)}
                autoFocus
                onFocus={(e) => setFocusNo(true)}
                onBlur={(e) => setFocusNo(false)}
              >
                NO
                {hoverNo || (focusNo && !hoverYes) ? <SelectArrow2 /> : <div className=""></div> }
              </button>
            </div>
          </div>
        </div>
          <div className="wrapper">
            <div className="top-textbox-container">
              <div className="absolute">
                <Text text={selectText}/>
              </div>
            </div>
          </div>
      </div>
    </div>
    )
}