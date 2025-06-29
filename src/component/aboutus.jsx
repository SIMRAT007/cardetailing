import React, { useState, useEffect } from 'react';
import { FaHandshake, FaCarSide, FaStar, FaSmile } from 'react-icons/fa';
import { BsFillEyeFill, BsCalendarCheck } from 'react-icons/bs';
import { AiOutlineAim } from 'react-icons/ai';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0" id="about">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

          {/* Left Section */}
          <div className="w-full flex-col justify-center lg:items-start max-md:items-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center lg:items-start max-md:items-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start max-md:items-center items-center gap-4 flex">
                <h6 className="text-gray-800 text-base font-normal leading-relaxed font-bold max-md:text-center">
                  - About Us -
                </h6>
                <div className="w-full flex-col justify-start lg:items-start max-md:items-center items-center gap-3 flex">
                  <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start max-md:text-center text-center animate-gradient bg-gradient-to-r from-red-600 via-black to-red-600 bg-clip-text text-transparent bg-300%  transition-transform duration-300">
                    Simple, affordable, and effective car detailing Services
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start max-md:text-center text-center">
                    At G-SAAB, Expert Detailing has been a trailblazer in automotive care, delivering ‘Perfection in Every Detail’ for seven years. Our seasoned expertise ensures unrivaled precision and passion in enhancing your vehicle’s aesthetic and performance. With a commitment to excellence, we redefine automotive detailing, providing a comprehensive range of services tailored to meet the unique needs of each vehicle. Trust in our seven years of dedicated craftsmanship to transform your ride into a masterpiece. Experience the artistry of Expert Detailing – where every detail matters.
                  </p>
                </div>
              </div>

              {/* Statistics */}
              <div className="w-full justify-start max-md:justify-center items-center gap-8 max-md:gap-y-4 max-md:gap-x-2 grid md:grid-cols-2 grid-cols-1">
                <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
                  <div className="flex items-center gap-3">
                    <BsCalendarCheck className="text-2xl text-red-700" />
                    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">10+ Years</h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">Experience in Car Detailing</p>
                </div>
                <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
                  <div className="flex items-center gap-3">
                    <FaCarSide className="text-2xl text-red-700" />
                    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">500+ Cars</h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">Detailed to Perfection</p>
                </div>
                <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
                  <div className="flex items-center gap-3">
                    <FaStar className="text-2xl text-red-700" />
                    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">4.8 / 5</h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">Client Rating</p>
                </div>
                <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
                  <div className="flex items-center gap-3">
                    <FaSmile className="text-2xl text-red-700" />
                    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">98% Happy Clients</h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">Customer Satisfaction Guaranteed</p>
                </div>
              </div>

              {/* More Button */}
              <div className="mt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-20 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 cursor-pointer font-semibold text-base"
                >
                  More About G-SAAB
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-300 rounded-3xl sm:border border-gray-200 relative">
              <video
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://videos.pexels.com/video-files/6873163/6873163-sd_360_640_25fps.mp4"
                autoPlay
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-4xl w-full p-8 relative shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-red-600 mb-6">More About G-SAAB</h3>
            
            {/* Values Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <FaHandshake className="text-2xl text-red-600" />
                <h4 className="text-xl font-bold text-gray-800">Our Values</h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Keep your car clean by detailing it regularly.
                At Expert Detailing, our core values drive our commitment to excellence. With a focus on precision, passion, and a dedication to perfection, we redefine automotive detailing. Trust our seven years of craftsmanship to transform your vehicle into a masterpiece, where every detail matters. Experience the artistry of Expert Detailing – unparalleled automotive care.
              </p>
            </div>

            {/* Vision Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <BsFillEyeFill className="text-2xl text-red-600" />
                <h4 className="text-xl font-bold text-gray-800">Our Vision</h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Expert Detailing: Pioneering automotive care for seven years, we embody 'Perfection in Every Detail.' With seasoned expertise, we redefine detailing, ensuring precision, passion, and excellence in enhancing your vehicle.
              </p>
            </div>

            {/* Mission Section */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <AiOutlineAim className="text-2xl text-red-600" />
                <h4 className="text-xl font-bold text-gray-800">Our Mission</h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Expert Detailing offers meticulous exterior and interior detailing, ceramic coating, paint correction, wheel care, window tinting, paint protection film, headlight restoration, engine bay detailing, and comprehensive packages for unrivaled automotive perfection.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-800 text-2xl font-bold transition duration-300 focus:outline-none cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
