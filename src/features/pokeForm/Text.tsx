import { useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks";
import TypeWriterText from "./TypeWriterText";

export default function Text (props: { text: string; }){
  const prefersReducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null);

  if (prefersReducedMotion){
    return (
      <div className="textbox">
        <div className="text-content">
          {!props.text ? "_" : props.text}
          <div ref={ref} style={{marginTop: '2%'}} />
        </div>
      </div>
    )
  } else {
    return (
      <TypeWriterText text={props.text}/>
    )
  }
}