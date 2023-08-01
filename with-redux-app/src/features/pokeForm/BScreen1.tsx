import PokeGrid from "./PokeGrid-Gen7";
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  getPokeInput,
  getPokedexNumber,
  getGen,
  increaseGenNum, 
  decreaseGenNum
} from './pokeSlice'
export default function BScreen1() {
  const dispatch = useAppDispatch()

  const pokedexnumber = useAppSelector(getPokedexNumber)
  const pokename = useAppSelector(getPokeInput)
  const genNum = useAppSelector(getGen)
  return (
    <div className="pure-g">
      <div className="pure-u-3-4">
        <div className="box-container">
          <div className="box-wallpaper-container">
            <Image 
              className="box-wallpaper" 
              src={`/backgrounds/box-wallpaper.png`} 
              alt={"box-wallpaper"} 
              fill
              sizes="42vw"
            />
          </div>
          <div className="box-content">
            <div className="pure-g">
              <div className="pure-u-1-12">
                <div 
                  className="box-arrow-container"
                  onClick={(e) => dispatch(decreaseGenNum())}
                >
                  <Image 
                    className="box-header" 
                    src={`/backgrounds/box-left.png`} 
                    alt={"box-header"} 
                    fill
                    sizes="42vw"
                  />
                </div>
              </div>
              <div className="pure-u-5-6">
                <div className="box-header-container">
                  <Image 
                    className="box-header" 
                    src={`/backgrounds/box-header.png`} 
                    alt={"box-header"} 
                    fill
                    sizes="42vw"
                  />
                  <div className="gen-text">
                    GEN {genNum}
                  </div>
                </div>
              </div>
              <div className="pure-u-1-12">
                <div 
                  className="box-arrow-container"
                  onClick={(e) => dispatch(increaseGenNum())}
                >
                  <Image 
                    className="box-header" 
                    src={`/backgrounds/box-right.png`} 
                    alt={"box-header"} 
                    fill
                    sizes="42vw"
                  />
                </div>
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1">
                <div className="pokegrid-ratio-container">
                  <div className="pokegrid-container">
                    <PokeGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className="pure-u-3-4">
        {/* TODO: add the search function here */}
      </div>
    </div>
    )
}