import { useEffect, useState } from 'react';

// used this tutorial: https://codesandbox.io/s/typewriter-effect-8jbpxh?file=/src/TextGenerate/index.js:301-315 
export default function TypeWriterText(props : any) {
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
    </div>
    )
}