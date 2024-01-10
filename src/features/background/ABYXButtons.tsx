import Image from 'next/image';
export default function ABYXButtons() {
  return (
    <div className="abyx-container fix-margins">
        <Image 
        className="directionbutton"
        src={`/3ds/ABYXbuttons.png`} 
        alt={""} 
        fill={true}
        sizes="50vw"/>
    </div>
    )
}