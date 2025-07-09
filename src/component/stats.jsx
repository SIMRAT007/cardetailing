import React from 'react';

const Stats = () => {
  const statsData = [
    { value: "5+", label: "Yrs Experience" },
    { value: "98%", label: "Happy Customers" },
    { value: "50+", label: "Awards" },
    { value: "1k+", label: "Cars Washed" },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row">
          {/* Header Section */}
          <div className="w-full lg:w-60">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Our Stats
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
            Trusted by car enthusiasts for exceptional detailing services.
            </p>
          </div>

          {/* Stats Section */}
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              {statsData.map((stat, index) => (
                <div key={index} className="block">
                  <div className="font-manrope font-bold text-4xl text-red-600 mb-3 text-center lg:text-left">
                    {stat.value}
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;