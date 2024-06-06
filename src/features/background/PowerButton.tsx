import HobbyImage from "../pokeForm/HobbyImage";

export default function PowerButton() {
  return (
    <div className="power-container">
        <HobbyImage 
        className="powerbutton"
        src={`/3ds/power.png`} 
        alt={""} 
        fill={true}
        sizes="20vw"
        />
    </div>
    )
}