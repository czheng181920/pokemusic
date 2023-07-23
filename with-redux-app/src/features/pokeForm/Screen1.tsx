import Image from 'next/image';
import { welcomeText } from './texts.js';
import TypeWriterText from './TypeWriterText';

export default function Screen1() {
  return (
    <div className="welcome-screen">
      <div className="pure-u-g">
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
      <div className="pure-u-1 bottom">
        <div className="top-textbox-container">
          <div className="absolute">
            <TypeWriterText text={welcomeText}/>
          </div>
        </div>
      </div>
    </div>
    )
}