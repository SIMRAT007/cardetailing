import React from 'react';
import { FaCar, FaWater, FaTools, FaOilCan, FaBatteryFull, FaSnowflake, FaPaintRoller, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const servicesData = [
  {
    title: "Car Washing",
    description: "Comprehensive car washing services to remove dirt and grime, leaving your car spotless.",
    icon: <FaCar className="text-red-600 text-3xl" />,
  },
  {
    title: "Steam Wash",
    description: "High-pressure steam cleaning for a deep and eco-friendly wash of your car’s exterior and interior.",
    icon: <FaWater className="text-red-600 text-3xl" />,
  },
  {
    title: "Repair Services",
    description: "Expert repair services for brakes, suspension, steering, and more to ensure your car runs smoothly.",
    icon: <FaTools className="text-red-600 text-3xl" />,
  },
  {
    title: "Oil Change",
    description: "Regular oil changes to keep your engine running smoothly and extend its lifespan.",
    icon: <FaOilCan className="text-red-600 text-3xl" />,
  },
  {
    title: "Battery Replacement",
    description: "Quick and reliable battery replacement services to keep your car powered up.",
    icon: <FaBatteryFull className="text-red-600 text-3xl" />,
  },
  {
    title: "AC Service",
    description: "Ensure your car’s air conditioning system is working efficiently with our AC services.",
    icon: <FaSnowflake className="text-red-600 text-3xl" />,
  },
  {
    title: "Ceramic Coating",
    description: "Protect your car’s paint with our advanced ceramic coating services for a long-lasting shine.",
    icon: <FaPaintRoller className="text-red-600 text-3xl" />,
  },
  {
    title: "Headlight Restoration",
    description: "Restore your headlights to their original clarity for improved visibility and aesthetics.",
    icon: <FaLightbulb className="text-red-600 text-3xl" />,
  },
  {
    title: "Paint Protection Film (PPF)",
    description: "Protect your car’s paint from scratches, chips, and environmental damage with our high-quality PPF services.",
    icon: <FaShieldAlt className="text-red-600 text-3xl" />,
  },
];

const Services = () => {
  return (
    <section className="py-24" id='services'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
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
      </div>
    </section>
  );
};

export default Services;