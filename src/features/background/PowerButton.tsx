import Image from 'next/image';
export default function PowerButton() {
  return (
    <div className="power-container">
        <Image 
        className="powerbutton"
        src={`/3ds/power.png`} 
        alt={""} 
        fill={true}
        sizes="20vw"
        />
    </div>
    )
}