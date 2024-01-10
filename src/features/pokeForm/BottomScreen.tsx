import BScreen1 from "./BScreen1";
import { useAppSelector} from '../../hooks';
import { getStatus } from './pokeSlice';
import BScreen2 from "./BScreen2";
import BLoadingScreen from "./BLoadingScreen";

export default function BottomScreen() {
  const status =  useAppSelector(getStatus)
  function renderScreen() {
    switch(status){
      case 'loading':
        return (<BLoadingScreen />);
      case 'success':
        return (<BScreen2 />);
      default:
        return (<BScreen1 />);
    }
  }
  return (
    <div className="wrapper-with-intrinsic-ratio bottomscreen-wrapper center">
        {renderScreen()}
    </div>
    )
}