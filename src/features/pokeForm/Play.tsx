import Image from 'next/image';

export default function Play() {
  return (
    <div className="controls-container">
      <Image 
      className="play-button" 
      src={`/backgrounds/play-button.png`} 
      alt='Play Music'
      fill
      sizes="25vw"
    />
    </div>
  )
}