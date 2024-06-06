import HobbyImage from "./HobbyImage";

export default function Play() {
  return (
    <div className="controls-container">
      <HobbyImage 
      className="play-button" 
      src={`/backgrounds/play-button.png`} 
      alt='Play Music'
      fill
      sizes="25vw"
    />
    </div>
  )
}