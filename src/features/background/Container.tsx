import { MainBody } from "./MainBody";

export function Container() {
  return (
    <div className="maintain-aspect-ratio-but-fill-screen-width-and-height">
      <div className="wrapper-with-intrinsic-ratio container">
        <MainBody /> 
      </div>
    </div>
  );
};