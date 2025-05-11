import React, { useRef, useState } from 'react';
import Navbar from '../component/navbar';
import colors from '../constants/colors';
import herovideo1 from '../assets/herovideo1.mp4';
import herovideo2 from '../assets/herovideo2.mp4';
import herovideo3 from '../assets/herovideo3.mp4';

const Home = () => {

  const videoRef = useRef(null);

  const videoList = [
    herovideo1,
    herovideo2,
    herovideo3,
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* <div className='bg-gradient-to-r from-gray-800 to-red-600'> */}
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-28 md:mt-28 lg:mt-58 mb-2">
          <div className="flex flex-col items-center text-center">
            {/* Small Text */}
            <p className="text-sm md:text-base text-gray-200 mb-2">
              - Precision, Prestige, Perfection -
            </p>

            {/* Main Heading */}
            {/* <p className="text-[3rem] md:text-[5rem] font-bold text-white">
              Your Car Deserves the <span className="font-extrabold" style={{ color: colors.tertiaryDark }}>Best</span>,
            </p>
            <p className="text-[3rem] md:text-[5rem] font-bold text-gray-300">
              <span className="inline-flex items-end flex max-md:flex-col max-md:items-center">
                We Deliver It
                <img
                  src="https://em-content.zobj.net/source/emojidex/112/automobile_1f697.png"
                  loading="lazy"
                  alt="Car Emoji"
                  className="w-20 h-20 md:w-20 md:h-20 ml-3 md:ml-5 transform scale-x-[-1]"
                />
              </span>
            </p> */}

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
              Professional car washing, repairing, and maintenance services tailored to meet your needs. We ensure precision, reliability, and top-notch quality to keep your vehicle in perfect condition. Experience the best care for your car with our expert team and advanced techniques.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
              {/* <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
      Contact
    </button> */}
              <button className="text-white font-bold py-2 px-6 rounded-lg transition duration-300 hover:bg-white hover:text-red-600 cursor-pointer border-2 border-white" >
                Get Quote
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-8 rounded-lg shadow-lg p-6 w-[90%] md:w-[80%] border border-gray-300">
            <form className="flex flex-col space-y-4 md:space-y-0 gap-4">
              <div className="flex flex-col md:flex-row md:space-x-4 w-full text-white">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-400 max-md:mb-4 text-white"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-400 max-md:mb-4"
                />
                <textarea
                  placeholder="Message"
                  rows="1"
                  className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-500 transition duration-300 w-full md:w-auto cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Hero box */}
          {/* <div className="mt-8 bg-white rounded-lg shadow-lg p-4 w-[90%] md:w-[80%] h-[40%]">
          <img
            src="https://via.placeholder.com/800x400" // Replace with your desired image URL
            alt="Car Service"
            className="w-[100%] max-w-4xl rounded-lg"
          />
        </div> */}

          <div className="mt-8 bg-white rounded-lg shadow-lg w-[90%] md:w-[95%] h-[40%]">
            <video
              ref={videoRef}
              src={videoList[currentVideoIndex]}
              onEnded={handleVideoEnd}
              autoPlay
              muted
              loop={false}
              playsInline
              className="w-full h-auto rounded-lg"
              preload="auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      {/* </div> */}
    </>
  );
};

export default Home;