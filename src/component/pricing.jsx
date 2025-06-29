import React from 'react';
import { FaCar, FaCarSide, FaGem, FaPhoneAlt } from 'react-icons/fa';

const Pricing = () => {
    const handleCall = () => {
      window.location.href = 'tel:+16394230070';
    };

    const pricingPlans = [
      {
        title: "Silver Package",
        subtitle: "Interior only",
        price: "154",
        cents: ".99",
        currency: "CA$",
        duration: "Starting",
        icon: <FaCarSide className="w-6 h-6" />,
        features: [
          "Interior clean only",
          "Vacuum & Steam Cleaning",
          "Stain removal for carpets & seats",
          "Floor mats & rear hatch cleaning",
          "Vent cleaning & sanitization",
          "Dashboard cleaning & dressing",
          "Cupholders & doors detailing",
          "All plastics treatment",
          "Windows & door seals cleaning"
        ],
      },
      {
        title: "Gold Package",
        subtitle: "Interior & Exterior",
        price: "184",
        cents: ".99",
        currency: "CA$",
        duration: "Starting",
        icon: <FaCar className="w-6 h-6" />,
        features: [
          "Complete interior cleaning",
          "Steam cleaning & stain removal",
          "Dash & plastics treatment",
          "Windows & seals cleaning",
          "Exterior hand wash & dry",
          "Body panels & bumpers cleaning",
          "Pressure wash treatment",
          "Rims & tires cleaning",
          "Running boards & wheel wells"
        ],
      },
      {
        title: "Diamond Package",
        subtitle: "Full Interior & Exterior",
        price: "279",
        cents: ".99",
        currency: "CA$",
        duration: "Starting",
        icon: <FaGem className="w-6 h-6" />,
        features: [
          "Complete interior & exterior service",
          "Headliner & leather conditioning",
          "Clay bar treatment",
          "Banana wax polish",
          "Engine gentle wash",
          "Vinyl & tires dressing",
          "Rims special treatment",
          "Hinges lubrication",
          "Glass water repellent treatment"
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
                  <div className="text-red-600 transition-all duration-300 group-hover:text-white">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="font-manrope text-2xl font-bold mt-7 text-center text-red-600">
                  {plan.title}
                </h3>
                <h6 className="font-manrope text- font-bold my-2 mb-5 text-center text-red-800">
                  {plan.subtitle}
                </h6>

                {/* Price Display Update */}
                <div className="flex items-center justify-center">
                  <span className="text-xl text-gray-600 mr-1">{plan.currency}</span>
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-600">{plan.cents}</span>
                </div>
                {/* <span className="text-center text-gray-500 mt-1">
                  {plan.duration}
                </span> */}
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

              <button
                onClick={handleCall}
                className="py-2.5 px-5 bg-red-50 shadow-sm rounded-full transition-all duration-500 text-base text-red-600 font-semibold text-center w-fit mx-auto group-hover:bg-red-600 group-hover:text-white flex items-center gap-2"
              >
                <FaPhoneAlt className="text-sm" />
                CALL NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;