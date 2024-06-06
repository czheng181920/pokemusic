import HobbyImage from '../pokeForm/HobbyImage';
export default function DirectionButton() {
  return (
    <div className="direction-container">
        <HobbyImage 
        className="directionbutton"
        src={`/3ds/directionbutton.png`} 
        alt={""} 
        fill={true}
        sizes="50vw"
        />
    </div>
    )
}