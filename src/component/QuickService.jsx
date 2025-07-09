import React from 'react';
import { FaCheck, FaClock, FaPhoneAlt, FaSprayCan, FaBroom, FaCarSide, FaWindowMaximize } from 'react-icons/fa';

const QuickService = () => {
  const handleCall = () => {
    window.location.href = 'tel:+16394230070';
  };

  const features = [
    {
      icon: <FaSprayCan />,
      title: "Quick Vacuum",
      description: "Deep clean your car's interior with our powerful vacuum system"
    },
    {
      icon: <FaBroom />,
      title: "Mats Cleaned",
      description: "Thorough mat cleaning to remove dirt and restore appearance"
    },
    {
      icon: <FaCarSide />,
      title: "Interior Quick Wipe",
      description: "Comprehensive wipe-down of all interior surfaces"
    },
    {
      icon: <FaWindowMaximize />,
      title: "Interior Windows Wiped",
      description: "Crystal-clear windows for perfect visibility"
    }
  ];

  return (
    <div className="w-[90%] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-8 text-white">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaClock className="text-3xl" />
          <h3 className="text-3xl font-bold">Quick Glow</h3>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-xl opacity-90">One hour special</p>
          <div className="h-6 w-px bg-white/30"></div>
          <p className="text-xl">$110</p>
        </div>
      </div>
      
      <div className="px-8 py-10 flex flex-col md:flex-row items-start justify-between gap-8">
        <ul className="space-y-6 md:flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4 group">
              <div className="bg-red-50 p-2.5 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                <div className="text-red-600 text-xl">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="md:w-72 flex flex-col gap-4 max-md:mb-10">
          <button 
            onClick={handleCall}
            className="w-full bg-red-600 text-white py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl max-md:px-5"
          >
            <FaPhoneAlt className="text-xl" />
            <span className="text-lg font-semibold">Schedule a Call Now</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-5 right-8 max-md:bottom-5 max-md:mx-8">
        <p className="text-sm text-gray-500 italic">
          *Service time & pricing may vary based on vehicle condition
        </p>
      </div>
    </div>
  );
};

export default QuickService;
