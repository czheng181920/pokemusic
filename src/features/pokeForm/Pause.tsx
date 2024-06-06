import HobbyImage from './HobbyImage';

export default function Pause() {
  return (
    <div className="controls-container">
      <HobbyImage 
      className="pause-button" 
      src={`/backgrounds/pause-button.png`} 
      alt='Pause Music'
      fill
      sizes="25vw"
    />
    </div>
  )
}