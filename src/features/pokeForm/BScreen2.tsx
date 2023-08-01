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
import TypeWriterText from "./TypeWriterText";

export default function BScreen2() {
  const dispatch = useAppDispatch()

  const pokedexnumber = useAppSelector(getPokedexNumber)
  const pokename = useAppSelector(getPokeInput)
  const pokeInput = useAppSelector(getPokeInput)
  const status =  useAppSelector(getStatus)
  const genre = useAppSelector(getGenre)
  const details = useAppSelector(getDetails)
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <div className="selected-pokemon-name-container" style={{paddingLeft: '2%'}}>
          {pokename.toUpperCase()}'S FAVORITE MUSIC
        </div>
      </div>
      <div className="pure-u-1 scroll">
        <div className="wrapper">
          <div className="bottom-textbox-container">
            <div className="absolute">
              <TypeWriterText text={`${pokename.toUpperCase()} enjoys listening to ${genre.toUpperCase()} music. ${details}`}/>
            </div>
          </div>
        </div>
      </div>
      <div className="pure-u-1 bottom">
        <div className="footer-container">
          <div className="absolute">
            <div className="rightflex">
              <div className="footer-button-container" onClick={(e) => dispatch(clearOpenAIOutput())} >
                <Image 
                  className="back-arrow" 
                  src={`/backgrounds/back-arrow.png`} 
                  alt='back button'
                  fill
                  sizes="50vw"
                />
              </div>
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