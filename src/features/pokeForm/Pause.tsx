import Image from 'next/image';

export default function Pause() {
  return (
    <div className="controls-container">
      <Image 
      className="pause-button" 
      src={`/backgrounds/pause-button.png`} 
      alt='back button'
      fill
      sizes="25vw"
    />
    </div>
  )
}