import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import herovideo1 from '../assets/herovideo1.mp4';
import herovideo2 from '../assets/herovideo2.mp4';
import herovideo3 from '../assets/herovideo3.mp4';
import { FaPlay, FaTimes } from 'react-icons/fa';
import Intro from '../assets/intro.mp4'; 

const Home = () => {
  const videoRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const videoList = [herovideo1, herovideo2, herovideo3];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeModal = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-28 md:mt-28 lg:mt-58 mb-2">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm md:text-base text-gray-200 mb-2">
            - Precision, Prestige, Perfection -
          </p>
          <p className="text-[3rem] md:text-[5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500">
            Your Car Deserves the <span className="font-extrabold">Best</span>,
          </p>
          <p className="text-[3rem] md:text-[5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500">
            <span className="inline-flex items-end flex max-md:flex-col max-md:items-center">
              We Deliver It
              <img
                src="https://em-content.zobj.net/source/emojidex/112/automobile_1f697.png"
                loading="lazy"
                alt="Car Emoji"
                className="w-20 h-20 md:w-20 md:h-20 ml-3 md:ml-5 transform scale-x-[-1]"
              />
            </span>
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-2 w-[60%] max-md:w-[95%]">
            G-Saab, Professional car washing, repairing, and maintenance services tailored to meet your needs...
          </p>

          {/* ▶️ Video Play Button */}
          <div className="flex mt-4">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-red-600 hover:text-white transition duration-300 flex items-center space-x-2 border border-red-600 cursor-pointer"
            >
              <FaPlay className="animate-pulse" />
              <span>Watch Intro</span>
            </button>
          </div>
        </div>

        {/* Form */}
        {/* <div className="mt-8 rounded-lg shadow-lg p-6 w-[90%] md:w-[80%] border border-gray-300">
          <form className="flex flex-col space-y-4 md:space-y-0 gap-4">
            <div className="flex flex-col md:flex-row md:space-x-4 w-full text-white">
              <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 text-white" />
              <input type="text" placeholder="Contact Number" className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3" />
              <textarea placeholder="Message" rows="1" className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3"></textarea>
            </div>
            <button type="submit" className="bg-red-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-500 transition duration-300 w-full md:w-auto">
              Submit
            </button>
          </form>
        </div> */}

        {/* Default Inline Video */}
        <div className="mt-8 bg-white rounded-lg shadow-lg w-[90%] md:w-[95%]">
          <video
            ref={videoRef}
            src={videoList[currentVideoIndex]}
            onEnded={handleVideoEnd}
            autoPlay
            muted
            loop={false}
            playsInline
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Video Modal Popup */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative bg-transparent rounded-xl overflow-hidden shadow-lg max-w-3xl w-[90%]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-500 hover:text-red-800 transition-colors duration-300 p-2 z-50 bg-white rounded-full cursor-pointer shadow-lg transform hover:scale-120 transition-transform duration-300" 
              aria-label="Close"
            >
              <FaTimes className="text-2xl " />
            </button>
            <video
              src={Intro}
              autoPlay
              controls
              className="w-[60%] h-[60%] m-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
