import React from 'react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';

const Timing = () => {
  const schedule = [
    { day: 'Monday', hours: '09:00 to 18:00', isOpen: true },
    { day: 'Tuesday', hours: '09:00 to 18:00', isOpen: true },
    { day: 'Wednesday', hours: '09:00 to 18:00', isOpen: true },
    { day: 'Thursday', hours: '09:00 to 18:00', isOpen: true },
    { day: 'Friday', hours: '09:00 to 18:00', isOpen: true },
    { day: 'Saturday', hours: '09:00 to 18:00', isOpen: true },
    { day: 'Sunday', hours: '09:00 to 18:00', isOpen: true },
  ];

  return (
    <section className="py-16 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Title with enhanced styling */}
        <div className="flex flex-col items-center justify-center gap-3 mb-12">
          <div className="p-4 bg-red-50 rounded-full shadow-red-100 shadow-lg">
            <FaClock className="text-3xl text-red-600 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold text-center text-gray-900 tracking-tight">Service Hours</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mt-2"></div>
        </div>
        
        {/* Schedule container with enhanced styling */}
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-gray-100 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent"></div>
          {schedule.map((item, index) => (
            <div 
              key={item.day}
              className={`flex justify-between items-center p-6 relative z-10 ${
                index !== schedule.length - 1 ? 'border-b border-gray-200' : ''
              } hover:bg-red-50 transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300">
                  <FaCalendarAlt className="text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                </div>
                <span className="text-lg font-medium text-gray-800">{item.day}</span>
              </div>
              <div className="flex items-center gap-3 bg-red-50 py-2 px-4 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                <BiTime className="text-red-500" />
                <span className="text-lg text-red-600 font-semibold">{item.hours}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer note with enhanced styling */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <FaClock className="text-red-500 animate-spin-slow" />
            <span className="text-gray-600 font-medium leading-none">Business hours may vary on holidays</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timing;
