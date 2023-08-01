import { useAppSelector } from '../../hooks'
import Pause from './Pause';
import Play from './Play';
import { getTracks } from './pokeSlice'
import { useCallback, useEffect, useRef, useState } from 'react';

export default function TrackBox(props) {
  var tracks = useAppSelector(getTracks)
  var track = tracks[props.tracknum] 

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    if(track.play.length > 0){
      setIsPlaying((prev) => !prev);
    }
  };
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };
  const playAnimationRef = useRef(null);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const repeat = useCallback(() => {
    if(audioRef.current){
      var currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };
  const renderPlayTime = () =>{
    if(track.play.length > 0){
      return (
        <div className="">
          <span className="time current">{formatTime(timeProgress)}/</span>
          <span className="time">{formatTime(duration)}</span>
        </div>
      )
    } else {
      return (
        <div className="">NO PLAYABLE PREVIEW</div>
      )
    }
  }
  return (
    <div className="track-container">
      <img className="albumart" src={track.albumArt} alt="album-art" />
      <div className="track-box-container">
        <div className="artist">
          <div className="artist-text-container">
            {track.artist}
          </div>
        </div>
        <div className="track-title">
        <a href={track.url} target="_blank">{track.title}</a>
        </div>
        <div className="audio-player-container">
          <div className="play-pause" onClick={togglePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </div>
          <div className="slider-container">
            <input 
              type="range" 
              ref={progressBarRef}
              defaultValue="0"
              onChange={handleProgressChange}
            />
          </div>
          <audio ref={audioRef} src={track.play} onLoadedMetadata={onLoadedMetadata}/>
        </div>
        <div className="audioprogres-container">
          <div className="progress">
            {renderPlayTime()}
          </div>
        </div>
      </div>
    </div>
    
    )
}