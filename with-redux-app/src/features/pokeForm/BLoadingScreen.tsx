import { loadingText } from './texts.js';
import TypeWriterText from './TypeWriterText';

export default function BLoadingScreen() {

  return (
    <div className="pure-g">
      <div className="pure-u-1 bottom">
        <TypeWriterText text={loadingText}/>
      </div>
    </div>
    )
}