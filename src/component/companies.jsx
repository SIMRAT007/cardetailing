import React from 'react';

const Companies = () => {
  return (
    <div className="bg-gray-200 py-24 sm:py-12 w-[95%] mx-auto rounded-3xl shadow-lg">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg/8 font-semibold text-gray-600">
      We provide expert care and servicing for a wide range of car brands. No matter what you drive, your car is in good hands.
    </h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img
        alt="TATA MOTORS"
        src="https://www.drcipy.com/wp-content/uploads/2021/05/Tata-Motors-800x600.png"
        width={240}
        height={80}
        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 transition duration-300 ease-in-out"
      />
      <img
        alt="Mahindra"
        src="https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo-2000.png"
        width={240}
        height={80}
        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 transition duration-300 ease-in-out"
      />
      <img
        alt="Nissan"
        src="https://1000logos.net/wp-content/uploads/2020/03/Nissan-Logo-2012.png"
        width={240}
        height={80}
        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 transition duration-300 ease-in-out"
      />
      <img
        alt="Volkswagen"
        src="https://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png"
        width={240}
        height={80}
        className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1 transition duration-300 ease-in-out"
      />
      <img
        alt="Honda"
        src="https://www.carlogos.org/car-logos/honda-logo.png"
        width={240}
        height={80}
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1 transition duration-300 ease-in-out"
      />
    </div>
  </div>
</div>
  );
};

export default Companies;