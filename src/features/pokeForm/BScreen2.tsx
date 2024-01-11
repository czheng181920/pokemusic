import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  getGenre,
  getDetails,
  getPokeInput,
  getPokedexNumber,
  getStatus,
  clearOpenAIOutput,
} from './pokeSlice'
import Text from "./Text";

export default function BScreen2() {
  const dispatch = useAppDispatch()

  const pokedexnumber = useAppSelector(getPokedexNumber)
  const pokename = useAppSelector(getPokeInput)
  const pokeInput = useAppSelector(getPokeInput)
  const status =  useAppSelector(getStatus)
  const genre = useAppSelector(getGenre)
  const details = useAppSelector(getDetails)
  return (
    <div className="bottomscreen screen bottomscreenstretch">
      <div className="pure-g">
        <h1 className="selected-pokemon-name-container" style={{paddingLeft: '2%'}}>
          {pokename.toUpperCase()}'S FAVORITE MUSIC
        </h1>
      </div>
      <div className="pure-g scroll grow">
        <div className="pure-u-1 wrapper fullHeight">
              <Text text={`${pokename.toUpperCase()} enjoys listening to ${genre.toUpperCase()} music. ${details}`}/>
        </div>
      </div>
      <div className="pure-g ">
        <div className="footer-container">
          <div className="absolute">
            <div className="rightflex">
              <div className="footer-button-container">
                <Image 
                  className="spotify-logo" 
                  src={`/backgrounds/spotify-logo.png`} 
                  alt='Spotify Logo'
                  fill
                  sizes="50vw"
                />
              </div>
              <button type='button' className="footer-button-container" onClick={(e) => dispatch(clearOpenAIOutput())} >
                <Image 
                  className="back-arrow hover-style" 
                  src={`/backgrounds/back-arrow.png`} 
                  alt='Back Arrow'
                  fill
                  sizes="50vw"
                />
              </button>
              {/* TODO: implement download playlist button */}
              {/* <div className="footer-button-container">
                <Image 
                  className="download-button" 
                  src={`/backgrounds/download-button.png`} 
                  alt='back button'
                  fill
                  sizes="50vw"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}