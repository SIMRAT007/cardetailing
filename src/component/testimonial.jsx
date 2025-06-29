import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Andrea Pfefferle",
      role: "Local Guide",
      image: "https://ui-avatars.com/api/?name=Andrea+P&background=f87171&color=fff",
      feedback: "He came out and detailed my car at my workplace. He did an amazing job! My car looks better than new 😊 I highly recommend!"
    },
    {
      name: "Jayde Harris",
      role: "Regular Customer",
      image: "https://ui-avatars.com/api/?name=Jayde+H&background=f87171&color=fff",
      feedback: "Highly recommend. They cleaned two of our cars and they came out above and beyond, looking brand new again :) Thanks again!"
    },
    {
      name: "Hakam Singh",
      role: "Verified Customer",
      image: "https://ui-avatars.com/api/?name=Hakam+S&background=f87171&color=fff",
      feedback: "Highly professional car detailing at reasonable price. The guy was really helpful as he booked me a spot the same day I called in. Highly recommend if anybody needs car detailing service in Saskatoon and nearby areas."
    },
    {
      name: "S. Hood",
      role: "Verified Customer",
      image: "https://ui-avatars.com/api/?name=S+Hood&background=f87171&color=fff",
      feedback: "Legit. They came over a couple hours after calling them and detailed my car on the spot, quite well. The price was reasonable, similar to the last place I went to, but it was done the same day."
    },
    {
      name: "Ange N",
      role: "Local Guide",
      image: "https://ui-avatars.com/api/?name=Ange+N&background=f87171&color=fff",
      feedback: "Excellent job. Inside and trunk look good as new. Would recommend and he comes to you."
    },
    {
      name: "Sukhman Sandhu",
      role: "Regular Customer",
      image: "https://ui-avatars.com/api/?name=Sukhman+S&background=f87171&color=fff",
      feedback: "G saab detailing did a fantastic job cleaning my car inside and out. I was impressed by their speed without compromising on the quality of the work. He was friendly and professional and making me feel valued as a customer."
    },
    {
      name: "Boss Man",
      role: "New Customer",
      image: "https://ui-avatars.com/api/?name=Boss+Man&background=f87171&color=fff",
      feedback: "Had this gentleman come to my work place on Monday morning. Amazing job and price. 100% recommend"
    },
    {
      name: "Lakhvir Sidhu",
      role: "Verified Customer",
      image: "https://ui-avatars.com/api/?name=Lakhvir+S&background=f87171&color=fff",
      feedback: "Very good experience. Very helpful staff. And excellent service. I really appreciate"
    },
    {
      name: "Manjinder Singh",
      role: "Regular Customer",
      image: "https://ui-avatars.com/api/?name=Manjinder+S&background=f87171&color=fff",
      feedback: "His service is really good at affordable price. He also came to my place that saved my trip. He is a humble person. I am happy to refer to my friends."
    },
    {
      name: "Harman Grewal",
      role: "Verified Customer",
      image: "https://ui-avatars.com/api/?name=Harman+G&background=f87171&color=fff",
      feedback: "Highly recommended. G Saab detailing service is affordable and never compromises with quality."
    },
    {
      name: "Jassi Singh",
      role: "New Customer",
      image: "https://ui-avatars.com/api/?name=Jassi+S&background=f87171&color=fff",
      feedback: "Very good service in Saskatoon"
    },
    {
      name: "Adrian Denzii",
      role: "New Customer",
      image: "https://ui-avatars.com/api/?name=Adrian+D&background=f87171&color=fff",
      feedback: "Good service and very professional. I had my car detailed and it looks like new again. Highly recommend!"
    },
    {
      name: "Irfan Jafri",
      role: "Local Guide",
      image: "https://ui-avatars.com/api/?name=Irfan+J&background=f87171&color=fff",
      feedback: "Excellent service and attention to detail provided by G Saab. My car looks brand new. Highly recommend their services!"
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <span className="text-sm text-red-700 font-medium mb-4 block">Testimonial</span>
            <h2 className="text-4xl font-bold text-gray-300 leading-[3.25rem] mb-8">
              5k+ Customers gave their{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-600 to-gray-800">
                Feedback
              </span>
            </h2>
            {/* Slider controls */}
            <div className="flex items-center justify-center lg:justify-start gap-10">
              <button
                className="swiper-button-prev group flex justify-center items-center border border-solid border-red-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-red-600"
              >
                <svg
                  className="h-6 w-6 text-red-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="swiper-button-next group flex justify-center items-center border border-solid border-red-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-red-600"
              >
                <svg
                  className="h-6 w-6 text-red-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={2}
              spaceBetween={28}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              loop={true}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600 min-h-90">
                    <div className="flex items-center gap-5 mb-5 sm:mb-9">
                      <img
                        className="rounded-full object-cover"
                        src={testimonial.image}
                        alt="avatar"
                      />
                      <div className="grid gap-1">
                        <h5 className="text-gray-900 font-medium transition-all duration-500">
                          {testimonial.name}
                        </h5>
                        <span className="text-sm leading-6 text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                      {testimonial.feedback}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;