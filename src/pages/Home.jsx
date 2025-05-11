import React from 'react';
import Hero from '../component/hero';
import Companies from '../component/companies';
import AboutUs from '../component/aboutus';
import WhyUs from '../component/whyus';
import Services from '../component/services';
import Pricing from '../component/pricing';
import Stats from '../component/stats';
import Testimonial from '../component/testimonial';
import CTA from '../component/CTA';
import FAQ from '../component/FAQ';
import ContactUs from '../component/contactus';
import Footer from '../component/footer';

const Home = () => {
  return (
  <>
   <div className="bg-gray-200 items-center justify-center overflow-hidden mb-10 bg-gradient-to-t from-gray-900 to-red-800 max-md:mt-10">
   <Hero/>
  </div>

  <Companies/>
  <div className="bg-gray-200 items-center justify-center mt-10 md:mx-10 rounded-3xl overflow-hidden">
        <AboutUs/>
  </div>
  <WhyUs/>
  <div className="bg-gray-200 items-center justify-center mt-10 md:mx-10 rounded-3xl overflow-hidden">
        <Services/>
        <Pricing/>
  </div>
  <Stats/>
<Testimonial/>
<div className="bg-gray-200 items-center justify-center mt-10 md:mx-10 rounded-3xl overflow-hidden">
     <FAQ/>
     <CTA/>
  </div>
  <ContactUs />
  <div className="items-center justify-center mt-10 md:mx-10 rounded-3xl overflow-hidden">
  <Footer/>
  </div>

  </>
  );
};

export default Home;
