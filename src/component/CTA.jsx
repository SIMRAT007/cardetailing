import React from 'react';

const CTA = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-red-600 to-gray-800 flex items-center justify-between flex-col lg:flex-row">
          {/* Text Section */}
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
              Your Car Deserves the Best Care
            </h2>
            <p className="text-xl text-indigo-100">
              Reach out to us for expert car detailing services. Let’s make your car shine like new!
            </p>
          </div>

          {/* Button Section */}
          <div className="flex gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-red-600 font-semibold py-4 px-8 transition-all duration-500"
            >
              Call Us Now
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#EE1E26"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;