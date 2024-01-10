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
    <div className="bottomscreen screen">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-7-8">
          <div className="box-container">
            <div className="box-wallpaper-container">
              <Image 
                className="box-wallpaper" 
                src={`/backgrounds/box-wallpaper.png`} 
                alt={""} 
                fill
                sizes="42vw"
              />
            </div>
            <div className="box-content">
              <div className="pure-g">
                <div className="pure-u-1-12" role="navigation">
                  <button 
                    type="button"
                    className="box-arrow-container pointer-cursor"
                    onClick={(e) => dispatch(decreaseGenNum())}
                  >
                    <Image 
                      className="header-left-arrow" 
                      src={`/backgrounds/box-left.png`} 
                      alt={"View Previous Generation"} 
                      fill
                      sizes="42vw"
                    />
                  </button>
                </div>
                <div className="pure-u-5-6">
                  <div className="box-header-container">
                    <Image 
                      className="box-header" 
                      src={`/backgrounds/box-header.png`} 
                      alt={""} 
                      fill
                      sizes="42vw"
                    />
                    <h1 className="gen-text">
                      GEN {genNum}
                    </h1>
                  </div>
                </div>
                <div className="pure-u-1-12">
                  <button 
                    type='button'
                    className="box-arrow-container pointer-cursor"
                    onClick={(e) => dispatch(increaseGenNum())}
                  >
                    <Image 
                      className="header-right-arrow" 
                      src={`/backgrounds/box-right.png`} 
                      alt={"View Next Generation"} 
                      fill
                      sizes="42vw"
                    />
                  </button>
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
    </div>
    
    )
}