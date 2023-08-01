import Image from 'next/image';

export default function LoadingScreen() {

  return (
    <div className="pure-g loading-background">
      <div className="pure-u-1 bottom">
        <div className="loading-container">
          <Image 
            className="loading" 
            src={`/backgrounds/loading.gif`} 
            alt='loading...'
            fill
            sizes="100vw"
          />
        </div>
      </div>
    </div>
    )
}