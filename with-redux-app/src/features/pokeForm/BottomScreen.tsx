import BScreen1 from "./BScreen1";
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  getStatus,
} from './pokeSlice'
import BScreen2 from "./BScreen2";

export default function BottomScreen() {
  const dispatch = useAppDispatch()

  const status =  useAppSelector(getStatus)
  function renderScreen() {
    switch(status){
      case 'loading':
        return (<p>Loading...</p>);
      case 'success':
        return (<BScreen2 />);
      default:
        return (<BScreen1 />);
    }
  }
  return (
    <div className="wrapper-with-intrinsic-ratio bottomscreen-wrapper center">
      <div className="bottomscreen screen">
        {renderScreen()}
      </div>
    </div>
    )
}