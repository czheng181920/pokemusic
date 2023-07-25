import Image from 'next/image';
import { selectText } from './texts.js';
import TypeWriterText from './TypeWriterText';
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setInput,
  setCurrentPokedexNumber,
  pokeSubmit,
  getPokeInput,
  getPokedexNumber,
  getStatus,
  clearOpenAIOutput,
  clearPokeInput,
} from './pokeSlice'
import { useState } from 'react';
import TrackBox from './TrackBox';

export default function Screen3() {
  const dispatch = useAppDispatch()

  const pokedexnumber = useAppSelector(getPokedexNumber)
  const pokename = useAppSelector(getPokeInput)
  const[hoverYes,setHoverYes] = useState(false);
  const[hoverNo,setHoverNo] = useState(false);

  return (
    <div className="">
      <div className="pure-g">
        <div className="pure-u-1-2">
          <div className="pure-g spacer">
            <div className="pure-u-1">
              <TrackBox tracknum = {0} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {2} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {4} />
            </div>
          </div>
        </div>
        <div className="pure-u-1-2">
          <div className="pure-g spacer spacer-r">
            <div className="pure-u-1">
              <TrackBox tracknum = {1} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {3} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {5} />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}