import Image from 'next/image';
import { useState } from 'react';

// this component is used to display images using Next.js's Image optimization.
// When the Next.js image usage limit is reached (yes i am on the free tier), the images will be displayed as 
// unoptimized images.
const HobbyImage = (props: any) => {
  const [isImageOptimized, setIsImageOptimized] = useState(true);
  return (
    <Image
      {...props}
      unoptimized={!isImageOptimized}
      onError={() => {
        setIsImageOptimized(false)
        console.log('unoptimized image')
      }}
    />
  );
}
export default HobbyImage;