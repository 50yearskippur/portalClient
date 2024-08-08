import { useRef, useState, useEffect } from "react";
import "./Video.css";
import playIcon from "../../assets/media/Icons/playIcon.png";

const Video = ({ src, style }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", () =>
        setCurrentTime(video.currentTime)
      );
      video.addEventListener("loadedmetadata", () =>
        setDuration(video.duration)
      );
    }
  }, []);

  const activationHandler = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "00" : ""}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimelineClick = (e) => {
    const newTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <>
      <div className="timer">
        {formatTime(duration)} / {formatTime(currentTime)}
      </div>
      <div className="video-container" style={style} >
        <video ref={videoRef} src={src} className="file"  />
        <div className="controls">
          <div className="activation-container" onClick={activationHandler}>
            <div className="activation-shadow">
              <div className="activation-background">
                <img className="play-icon-video" src={playIcon} alt="play icon" />
              </div>
            </div>
          </div>
          <div className="timeline-container" onClick={handleTimelineClick}>
            <div
              className="timeline-bar"
              style={{
                width: `${(currentTime / duration) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
