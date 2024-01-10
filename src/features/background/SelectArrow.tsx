import Image from 'next/image';
export default function SelectArrow() {
  return (
    <div className="select-arrow-container">
      <Image 
        className="select-arrow" 
        src={`/backgrounds/select-arrow.png`} 
        alt=""
        fill
        sizes="30vw"
      />
    </div>
  )
}