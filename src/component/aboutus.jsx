import React from 'react';

const AboutUs = () => {
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
          <h2 className="text-red-600 text-4xl font-bold font-manrope leading-normal lg:text-start max-md:text-center text-center">
            Your Car, Our Passion
          </h2>
          <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start max-md:text-center text-center">
            At G-SAAB, we specialize in premium car detailing services that bring your vehicle back to life. With years of expertise, cutting-edge techniques, and a passion for perfection, we ensure your car looks and feels brand new. From exterior polishing to interior cleaning, we deliver unmatched quality and care.
          </p>
        </div>
      </div>
      <div className="w-full justify-start max-md:justify-center items-center gap-8 max-md:gap-y-4 max-md:gap-x-2 grid md:grid-cols-2 grid-cols-1">
  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">10+ Years</h4>
    <p className="text-gray-500 text-base font-normal leading-relaxed">Experience in Car Detailing</p>
  </div>
  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">500+ Cars</h4>
    <p className="text-gray-500 text-base font-normal leading-relaxed">Detailed to Perfection</p>
  </div>
  <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">50+ Awards</h4>
    <p className="text-gray-500 text-base font-normal leading-relaxed">Recognized for Excellence</p>
  </div>
  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start max-md:items-center items-start gap-2.5 inline-flex max-md:text-center">
    <h4 className="text-red-700 text-2xl font-bold font-manrope leading-9">98% Happy Clients</h4>
    <p className="text-gray-500 text-base font-normal leading-relaxed">Customer Satisfaction Guaranteed</p>
  </div>
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
    </section>
  );
};

export default AboutUs;