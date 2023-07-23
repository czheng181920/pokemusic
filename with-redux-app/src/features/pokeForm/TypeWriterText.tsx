import { useEffect, useRef, useState } from 'react';

// used this tutorial: https://codesandbox.io/s/typewriter-effect-8jbpxh?file=/src/TextGenerate/index.js:301-315 
// used this tutorial: https://reacthustle.com/blog/react-auto-scroll-to-bottom-tutorial
export default function TypeWriterText(props: { text: string; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);
  var timer: NodeJS.Timer;
  const dummyText = props.text;
  const handleGenerate = () => {
    if (started) {
      return;
    }
    setStarted(true);
    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === dummyText.length - 1) clearInterval(timer);
      setText((prev) => prev + dummyText[i]);
      ref.current?.scrollIntoView({
        behavior: "instant",
        block: "end"
      })
    }, 20);
  };
  const handleReset = () => {
    setText("");
    clearInterval(timer);
    setStarted(false);
  };

  useEffect(() => {
    handleGenerate();
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="textbox">
      {!text ? "_" : text}
      <div ref={ref} style={{marginTop: '2%'}} />
    </div>
    )
}