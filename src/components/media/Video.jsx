import React, { useRef, useState, useEffect } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import './Video.css';

const Video = ({ src, style }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(videoElement.currentTime);
    };

    const updateDuration = () => {
      setDuration(videoElement.duration);
    };

    if (videoElement) {
      videoElement.addEventListener('timeupdate', updateCurrentTime);
      videoElement.addEventListener('loadedmetadata', updateDuration);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', updateCurrentTime);
        videoElement.removeEventListener('loadedmetadata', updateDuration);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTimelineClick = (e) => {
    const newTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="video-container" style={style}>
      <video ref={videoRef} src={src} className="file" />
      <div className="controls">
      <PlayCircleFilledWhiteIcon style={{fontSize: '150px', position: 'absolute', marginBottom: '55%', opacity: isPlaying && '0', transition: '.3s'}} onClick={togglePlayPause}/>
      </div>
      <div className="timer">
           {formatTime(duration)} / {formatTime(currentTime)} 
      </div>
      <div className="timeline" onClick={handleTimelineClick}>
        <div
          className="timeline-progress"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Video;
