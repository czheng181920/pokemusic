import HobbyImage from '../pokeForm/HobbyImage'; 
export default function ABYXButtons() {
  return (
    <div className="abyx-container fix-margins">
        <HobbyImage 
        className="directionbutton"
        src={`/3ds/ABYXbuttons.png`} 
        alt={""} 
        fill={true}
        sizes="50vw"/>
    </div>
    )
}