import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active accordion

  const faqs = [
    {
      question: "What car details services do you offer?",
      answer: "We offer comprehensive detailing services including interior and exterior detailing, paint correction, ceramic coating, engine bay cleaning, headlight restoration, and specialized stain removal treatments. Each service is customized to meet your vehicle's specific needs.",
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For optimal results, we recommend detailing your car every 3-4 months. However, this can vary based on factors like your driving conditions, climate, and how you store your vehicle. Regular maintenance helps preserve your car's value and appearance.",
    },
    {
      question: "What's included in your car wash services?",
      answer: "Our car wash services include thorough exterior cleaning, wheel cleaning, tire dressing, window cleaning, and basic interior cleaning. We use premium products and techniques to ensure a spotless finish without damaging your vehicle's surfaces.",
    },
    {
      question: "Do you offer specialized treatments for specific stains or odors?",
      answer: "Yes, we offer specialized treatments for tough stains, persistent odors, and specific materials. Our team is equipped with professional-grade products and techniques to handle everything from pet odors to difficult upholstery stains.",
    },
    {
      question: "Can I schedule a car wash service without detailing?",
      answer: "Absolutely! We offer standalone car wash services for customers who want a quick refresh without a full detail. You can choose from our basic wash packages or customize the services according to your needs.",
    },
    {
      question: "Is there a warranty for your detailing services?",
      answer: "Yes, we stand behind our work with a satisfaction guarantee. Specific warranties vary by service, with ceramic coating treatments carrying longer-term protection guarantees. We'll discuss the warranty details before beginning any service.",
    },
    {
      question: "How long does a typical detailing session take?",
      answer: "Detailing times vary, but expect 2-4 hours for a thorough service. The exact duration depends on your vehicle's size, condition, and the services selected. We'll provide a time estimate before starting the work.",
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
              className={`accordion py-5 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl cursor-pointer ${
                activeIndex === index ? 'bg-red-50' : ''
              }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-red-600"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h5 className='text-xl font-medium text-gray-900 hover:text-red-600 cursor-pointer'>{faq.question}</h5>
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