import Image from 'next/image';

export default function Pause() {
  return (
    <div className="controls-container">
      <Image 
      className="pause-button" 
      src={`/backgrounds/pause-button.png`} 
      alt='Pause Music'
      fill
      sizes="25vw"
    />
    </div>
  )
}