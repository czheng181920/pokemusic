import Image from 'next/image';
export default function SelectArrow2() {
  return (
    <div className="select-arrow-container2">
        <Image 
          className="select-arrow2" 
          src={`/backgrounds/select-arrow2.png`} 
          alt="select arrow"
          fill
          sizes="20vw"
        />
    </div>
  )
}