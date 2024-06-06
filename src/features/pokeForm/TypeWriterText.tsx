import { useEffect, useRef, useState } from 'react';

// used this tutorial: https://codesandbox.io/s/typewriter-effect-8jbpxh?file=/src/TextGenerate/index.js:301-315 
// used this tutorial: https://reacthustle.com/blog/react-auto-scroll-to-bottom-tutorial
export default function TypeWriterText(props: { text: string; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  let delay = 30;
  useEffect(() => {
    if (currentIndex < props.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + props.text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, props.text]);
  return (
    <div className="textbox">
      <div className="text-content">
        {currentText}
        <div ref={ref} style={{marginTop: '2%'}} />
      </div>
    </div>
    )
}