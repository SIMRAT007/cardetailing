import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const points = [
  {
    title: "Expert Technicians",
    description: "Our team consists of highly trained professionals with years of experience in car detailing. They ensure your car gets the best care possible, using advanced techniques and tools."
  },
  {
    title: "Affordable Pricing",
    description: "We offer top-notch services at competitive rates, ensuring you get the best value for your money without compromising on quality."
  },
  {
    title: "Eco-Friendly Products",
    description: "We use environmentally safe products that are gentle on your car and the planet, ensuring a sustainable approach to car detailing."
  },
  {
    title: "Quick Turnaround",
    description: "Our efficient processes ensure that your car is detailed and ready in no time, without compromising on the quality of service."
  }
];

export default function WhyUs() {
  return (
    <section className="py-16 max-md:mx-4">
      <h2 className="md:text-[4rem] text-3xl font-bold text-center mb-6 text-red-600">Why Choose Us?</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        At [Your Brand Name], we are dedicated to providing top-notch car detailing services. Our commitment to quality, affordability, and customer satisfaction sets us apart. Discover why we are the trusted choice for car enthusiasts everywhere.
      </p>

      {/* Responsive Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10">
        
        {/* Left Cards (Mobile: All Cards Below Image, Desktop: Left Two) */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          {points.slice(0, 2).map((point, index) => (
            <div
              key={index}
              className="w-full lg:w-72 bg-white p-6 rounded-lg shadow-xl flex flex-col items-start gap-4"
            >
              <FaCheckCircle className="text-red-600 text-4xl mb-3" />
              <h4 className="text-xl font-bold text-gray-800">{point.title}</h4>
              <p className="text-base text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Car Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src="https://www.pngmart.com/files/4/Ferrari-Sergio-PNG-HD.png"
            alt="Car"
            className="w-80 h-auto"
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-8 order-3">
          {points.slice(2, 4).map((point, index) => (
            <div
              key={index}
              className="w-full lg:w-72 bg-white p-6 rounded-lg shadow-xl flex flex-col items-start gap-4"
            >
              <FaCheckCircle className="text-red-600 text-4xl mb-3" />
              <h4 className="text-xl font-bold text-gray-800">{point.title}</h4>
              <p className="text-base text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
