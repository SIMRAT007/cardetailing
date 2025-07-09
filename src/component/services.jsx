import React from 'react';
import { FaCar, FaWater, FaTools, FaOilCan, FaBatteryFull, FaBrush, FaCogs, FaChair, FaShieldAlt, FaSprayCan, FaStar, FaComments, FaUserTie } from 'react-icons/fa';

const servicesData = [
  {
    title: "Car Washing",
    description: "Comprehensive car washing services to remove dirt and grime, leaving your car spotless.",
    icon: <FaCar className="text-red-600 text-3xl" />,
  },
  {
    title: "Vacuum Service",
    description: "Thorough vacuuming of your car’s interior to remove dust, dirt, and debris.",
    icon: <FaWater className="text-red-600 text-3xl" />,
  },
  // {
  //   title: "Repair Services",
  //   description: "Expert repair services for brakes, suspension, steering, and more to ensure your car runs smoothly.",
  //   icon: <FaTools className="text-red-600 text-3xl" />,
  // },
  // {
  //   title: "Oil Change",
  //   description: "Regular oil changes to keep your engine running smoothly and extend its lifespan.",
  //   icon: <FaOilCan className="text-red-600 text-3xl" />,
  // },
  // {
  //   title: "Battery Replacement",
  //   description: "Quick and reliable battery replacement services to keep your car powered up.",
  //   icon: <FaBatteryFull className="text-red-600 text-3xl" />,
  // },
  {
    title: "Car Detailing",
    description: "Professional detailing services to restore and enhance your vehicle's appearance inside and out.",
    icon: <FaSprayCan className="text-red-600 text-3xl" />,
  },
  {
    title: "Exterior Polishing",
    description: "Enhance your car’s appearance with our professional exterior polishing services for a glossy finish.",
    icon: <FaBrush className="text-red-600 text-3xl" />,
  },
  {
    title: "Interior Cleaning",
    description: "Deep cleaning of your car's interior including seats, dashboard, and all surfaces for a fresh look.",
    icon: <FaChair className="text-red-600 text-3xl" />,
  },
  {
    title: "Engine Bay Cleaning",
    description: "Thorough cleaning and detailing of your engine bay to maintain performance and aesthetics.",
    icon: <FaCogs className="text-red-600 text-3xl" />,
  },
];

const featuresData = [
  {
    title: "High Professionalism",
    description: "Exemplary expertise, unparalleled service, and a commitment to utmost professionalism.",
    icon: <FaUserTie className="text-red-600 text-3xl" />,
  },
  {
    title: "Stunning Results",
    description: "Expect stunning results, as our expertise transforms visions into remarkable reality.",
    icon: <FaStar className="text-red-600 text-3xl" />,
  },
  {
    title: "Long-lasting Protection",
    description: "Ensuring enduring safeguard with our solutions for long-lasting protection and resilience.",
    icon: <FaShieldAlt className="text-red-600 text-3xl" />,
  },
  {
    title: "Free Consultations",
    description: "Unlock insights with our complimentary, guiding you towards informed decisions.",
    icon: <FaComments className="text-red-600 text-3xl" />,
  },
];

const Services = () => {
  return (
    <section className="py-24" id='services'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
  Premium Car Detailing Services
</h2>

          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">
              We offer a wide range of car detailing services to keep your vehicle in pristine condition. From washing to advanced detailing, we’ve got you covered.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-2xl p-4 transition-all duration-500 hover:bg-red-600"
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                {service.title}
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, affordable, and effective car detailing products.
            </h2>
            <h3 className="text-xl font-semibold text-red-600">
              Contact us for more information about our services and products.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-red-50 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;