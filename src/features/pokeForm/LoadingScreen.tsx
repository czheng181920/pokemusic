import Image from 'next/image';
import { usePrefersReducedMotion } from '../../hooks';
export default function LoadingScreen() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="pure-g loading-background">
      <div className="pure-u-1 bottom">
        <div className="loading-container">
          { prefersReducedMotion ?
            <Image 
              className="loading" 
              src={`/backgrounds/loading.png`} 
              alt='loading...'
              fill
              sizes="100vw"
            />
          :
            <Image 
              className="loading" 
              src={`/backgrounds/loading.gif`} 
              alt='loading...'
              fill
              sizes="100vw"
            />
          }
        </div>
      </div>
    </div>
    )
}