import TopScreen from "../pokeForm/TopScreen";
import BottomScreen from "../pokeForm/BottomScreen";
import ABYXButtons from "./ABYXButtons";
import PowerButton from "./PowerButton";
import DirectionButton from "./DirectionButton";

export function MainBody() {
  return (
    <div className="main-body">
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="pure-g">
            <div className="pure-u-1">
              <div className="center">
                <div className="camera">
                  <div className="camera2">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-g topscreensection">
            <div className="pure-u-3-24">
              <div className="">
                <div className="speaker right">
                  <svg
                    className="speaker-1"
                    width="100%"
                    height="auto"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="27.9278" cy="4.14999" r="3.98333" fill="#30165E" />
                    <circle cx="27.9278" cy="28.05" r="3.98333" fill="#30165E" />
                    <circle cx="51.8278" cy="28.05" r="3.98333" fill="#30165E" />
                    <circle cx="27.9278" cy="51.95" r="3.98333" fill="#30165E" />
                    <path
                      d="M8.0111 28.05C8.0111 30.2499 6.2277 32.0333 4.02777 32.0333C1.82783 32.0333 0.0444336 30.2499 0.0444336 28.05C0.0444336 25.85 1.82783 24.0667 4.02777 24.0667C6.2277 24.0667 8.0111 25.85 8.0111 28.05Z"
                      fill="#30165E"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pure-u-3-4">
              <TopScreen />
            </div>
            <div className="pure-u-3-24">
              <div className="">
                <div className="speaker left">
                  <svg
                    className="speaker-1"
                    width="100%"
                    height="auto"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="27.9278" cy="4.14999" r="3.98333" fill="#30165E" />
                    <circle cx="27.9278" cy="28.05" r="3.98333" fill="#30165E" />
                    <circle cx="51.8278" cy="28.05" r="3.98333" fill="#30165E" />
                    <circle cx="27.9278" cy="51.95" r="3.98333" fill="#30165E" />
                    <path
                      d="M8.0111 28.05C8.0111 30.2499 6.2277 32.0333 4.02777 32.0333C1.82783 32.0333 0.0444336 30.2499 0.0444336 28.05C0.0444336 25.85 1.82783 24.0667 4.02777 24.0667C6.2277 24.0667 8.0111 25.85 8.0111 28.05Z"
                      fill="#30165E"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-g">
            <div className="pure-u-1">
              <div className="divider">
                <div className="divider-main"></div>
              </div>
            </div>
          </div>
          <div className="pure-g">
            <div className="pure-u-5-24">
              <div className="pure-g centerY">
                <div className="pure-u-1 center">
                  <div className="joystick right">
                    <svg 
                      width="100%" 
                      height="auto" 
                      viewBox="0 0 158 157" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M157.544 78.4833C157.544 121.749 122.471 156.822 79.2056 156.822C35.9402 156.822 0.866699 121.749 0.866699 78.4833C0.866699 35.2179 35.9402 0.144409 79.2056 0.144409C122.471 0.144409 157.544 35.2179 157.544 78.4833Z" fill="#30165E"/>
                      <path d="M130.989 78.4833C130.989 107.082 107.805 130.267 79.2056 130.267C50.6065 130.267 27.4223 107.082 27.4223 78.4833C27.4223 49.8842 50.6065 26.7 79.2056 26.7C107.805 26.7 130.989 49.8842 130.989 78.4833Z" fill="#AD95D9"/>
                    </svg>
                  </div>
                </div>
                <div className="pure-u-1 center">
                  <DirectionButton />
                </div>
              </div>
            </div>
            <div className="pure-u-7-12">
              <BottomScreen />
            </div>
            <div className="pure-u-5-24">
              <div className="pure-u-1 left">
                <ABYXButtons />
              </div>
              <div className="pure-u-1 left">
                <PowerButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};