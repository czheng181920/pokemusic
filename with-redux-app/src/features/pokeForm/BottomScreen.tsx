import PokeGrid from "./PokeGrid";
import Image from 'next/image';

export default function BottomScreen() {
  return (
    <div className="wrapper-with-intrinsic-ratio bottomscreen-wrapper center">
      <div className="bottomscreen screen">
        <div className="pure-g">
          <div className="pure-u-3-4">
            <div className="box-container">
              <div className="box-wallpaper-container">
                <Image 
                  className="box-wallpaper" 
                  src={`/backgrounds/box-wallpaper.png`} 
                  alt={"box-wallpaper"} 
                  fill
                  sizes="42vw"
                />
              </div>
              <div className="box-content">
                <div className="pure-g">
                  <div className="pure-u-1-12">
                    <div className="box-arrow-container">
                      <Image 
                        className="box-header" 
                        src={`/backgrounds/box-left.png`} 
                        alt={"box-header"} 
                        fill
                        sizes="42vw"
                      />
                    </div>
                  </div>
                  <div className="pure-u-5-6">
                    <div className="box-header-container">
                      <Image 
                        className="box-header" 
                        src={`/backgrounds/box-header.png`} 
                        alt={"box-header"} 
                        fill
                        sizes="42vw"
                      />
                    </div>
                  </div>
                  <div className="pure-u-1-12">
                    <div className="box-arrow-container">
                      <Image 
                        className="box-header" 
                        src={`/backgrounds/box-right.png`} 
                        alt={"box-header"} 
                        fill
                        sizes="42vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="pure-g">
                  <div className="pure-u-1">
                    <div className="pokegrid-ratio-container">
                      <div className="pokegrid-container">
                        <PokeGrid />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
          <div className="pure-u-3-4">
            {/* TODO: add the search function here */}
          </div>
        </div>
      </div>
    </div>
    )
}