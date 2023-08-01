import TrackBox from './TrackBox';

export default function Screen3() {

  return (
    <div className="">
      <div className="pure-g">
        <div className="pure-u-1-2">
          <div className="pure-g spacer">
            <div className="pure-u-1">
              <TrackBox tracknum = {0} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {2} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {4} />
            </div>
          </div>
        </div>
        <div className="pure-u-1-2">
          <div className="pure-g spacer spacer-r">
            <div className="pure-u-1">
              <TrackBox tracknum = {1} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {3} />
            </div>
            <div className="pure-u-1">
              <TrackBox tracknum = {5} />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}