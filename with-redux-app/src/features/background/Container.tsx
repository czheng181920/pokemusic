import { MainBody } from "./MainBody";

export function Container() {
  return (
    <div className="pure-g center">
      <div className="pure-u-1 pure-u-md-3-4 pure-u-lg-5-8 pure-u-xl-11-24 pure-u-xxl-5-12">
        <div className="wrapper-with-intrinsic-ratio">
          <MainBody />
        </div>
      </div>
    </div>
  );
};