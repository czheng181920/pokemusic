import Image from 'next/image';
export default function DirectionButton() {
  return (
    <div className="direction-container">
        <Image 
        className="directionbutton"
        src={`/3ds/directionbutton.png`} 
        alt={"direction-button"} 
        fill={true}
        sizes="50vw"
        />
    </div>
    )
}