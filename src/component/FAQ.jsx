import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active accordion

  const faqs = [
    {
      question: "What services are included in your car detailing packages?",
      answer:
        "Our car detailing packages include exterior washing, waxing, interior vacuuming, upholstery cleaning, tire and rim cleaning, and optional ceramic coating for long-lasting protection.",
    },
    {
      question: "How long does a full car detailing service take?",
      answer:
        "A full car detailing service typically takes 2-4 hours, depending on the size and condition of your vehicle. Advanced services like ceramic coating may take longer.",
    },
    {
      question: "Do you offer mobile car detailing services?",
      answer:
        "Yes, we offer mobile car detailing services. Our team can come to your location with all the necessary equipment to provide professional detailing services at your convenience.",
    },
    {
      question: "How often should I get my car detailed?",
      answer:
        "We recommend getting your car detailed every 3-6 months to maintain its appearance and protect it from wear and tear. Regular detailing helps preserve your car's value.",
    },
    {
      question: "What is ceramic coating, and is it worth it?",
      answer:
        "Ceramic coating is a protective layer applied to your car's paint to shield it from dirt, UV rays, and minor scratches. It provides a glossy finish and long-lasting protection, making it a great investment for your vehicle.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active accordion
  };

  return (
    <section className="py-24" id='faq'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-red-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="accordion-group">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${
                activeIndex === index ? 'bg-red-50' : ''
              }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-red-600"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-red-600 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-base text-gray-900 leading-6 mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;