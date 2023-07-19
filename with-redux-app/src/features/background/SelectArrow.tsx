import Image from 'next/image';
export default function SelectArrow() {
  return (
    <div className="select-arrow-container">
      <Image 
        className="select-arrow" 
        src={`/backgrounds/select-arrow.png`} 
        alt="select arrow"
        fill
        sizes="30vw"
      />
    </div>
  )
}