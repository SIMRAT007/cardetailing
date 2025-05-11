import React from 'react';

const Pricing = () => {
    const pricingPlans = [
      {
        title: "Basic Wash",
        price: "$20",
        duration: "Per Wash",
        features: [
          "Exterior hand wash",
          "Tire and rim cleaning",
          "Basic interior vacuum",
          "Spot-free rinse and dry",
        ],
      },
      {
        title: "Deluxe Wash",
        price: "$50",
        duration: "Per Wash",
        features: [
          "Exterior hand wash and wax",
          "Tire and rim detailing",
          "Full interior vacuum & wipe-down",
          "Window cleaning (inside and out)",
        ],
      },
      {
        title: "Premium Detailing",
        price: "$150",
        duration: "Per Service",
        features: [
          "Complete exterior and interior detailing",
          "Clay bar treatment and polish",
          "Engine bay cleaning",
          "Ceramic coating application",
        ],
      },
    ];

  return (
    <section className="py-24 relative z-10" id='pricing'>
      <div className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-gray-800 to-red-600 -z-10"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
            Affordable Car Detailing Plans
          </h2>
          <p className="text-gray-300 text-xl text-center leading-6">
            Choose the perfect plan for your car’s needs. Satisfaction guaranteed!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300 p-8 xl:p-12"
            >
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                <div className="w-16 h-16 rounded-full bg-red-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-red-600">
                  <svg
                    className="w-6 h-6 text-red-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="font-manrope text-2xl font-bold my-7 text-center text-red-600">
                  {plan.title}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-500 ml-3">
                    |&nbsp; {plan.duration}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="javascript:;"
                className="py-2.5 px-5 bg-red-50 shadow-sm rounded-full transition-all duration-500 text-base text-red-600 font-semibold text-center w-fit mx-auto group-hover:bg-red-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;