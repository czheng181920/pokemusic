import { loadingText } from './texts.js';
import Text from './Text';

export default function BLoadingScreen() {

  return (
    <div className="bottomscreen screen">
      <div className="pure-g">
        <div className="pure-u-1 bottom loading-text">
          <Text text={loadingText}/>
        </div>
      </div>
    </div>
    )
}