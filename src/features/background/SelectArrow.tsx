import HobbyImage from "../pokeForm/HobbyImage";

export default function SelectArrow() {
  return (
    <div className="select-arrow-container">
      <HobbyImage 
        className="select-arrow" 
        src={`/backgrounds/select-arrow.png`} 
        alt=""
        fill
        sizes="30vw"
      />
    </div>
  )
}