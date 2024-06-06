import { welcomeText } from './texts.js';
import Text from './Text';
import HobbyImage from './HobbyImage';

export default function Screen1() {
  return (
    <div className="">
      <div className="pure-g">
        <div className="pure-u-1 centerY">
          <div className="profoak-container">
            <HobbyImage 
              className="profOak" 
              src={`/backgrounds/prof-oak.png`} 
              alt="professor oak"
              fill
              sizes="20vw"
            />
          </div>
        </div>
      </div>
      <div className="pure-u-1 bottom">
        <div className="top-textbox-container">
          <div className="absolute">
            <Text text={welcomeText}/>
          </div>
        </div>
      </div>
    </div>
    )
}