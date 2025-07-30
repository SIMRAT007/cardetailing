import React, { useState, useRef, useEffect } from 'react';
import Home from './pages/Home';
import './App.css';
import Intro from './assets/intro.mp4';
import Maintanence from './pages/Maintanence';

const App = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay failed:', error);
        }
      };
      playVideo();
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setShowVideo(false);
    }, 2500);
  };

  const handleClose = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setShowVideo(false);
    }, 2500);
  };

  return (
    // <>
    // <Maintanence />
    // </>


    <div className="app-container">
      {showVideo ? (
        <div className={`video-container ${videoEnded ? 'fade-out' : ''}`}>
          <button className="close-button max-md:top-5 max-md:w-10 max-md:h-10 max-md:bg-red-700" onClick={handleClose}>
            ×
          </button>
          <video
            ref={videoRef}
            playsInline
            muted
            autoPlay
            controls
            onEnded={handleVideoEnd}
            onError={() => setVideoError(true)}
            className="intro-video max-md:max-w-[80%] max-md:mb-10 max-md:rounded"
          >
            <source src={Intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {videoError && <div>Error loading video. Please refresh the page.</div>}
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;