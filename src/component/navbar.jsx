import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Adjust the path to your logo image
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="text-white max-md:text-black z-100">
      <div className="md:backdrop-filter backdrop-blur bg-opacity-80 p-4 shadow-lg z-50 md:w-[75%] md:mx-auto md:mt-10 md:rounded-full fixed mx-auto top-0 left-0 right-0 md:border-2 border-gray-300 max-md:bg-gradient-to-t from-red-900 to-gray-800 ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Logo Name */}
          <div className="flex items-center space-x-2 bg-black rounded-full p-3 text-white">
            <img src={Logo} alt="Logo" className="h-12 w-18 max-md:h-8 max-md:h-10" />
            {/* <NavLink to="/" className="text-2xl font-bold block md:hidden">
    GSAAB
  </NavLink> */}
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-xl">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
              >
                Pricing
              </Link>
            </li>
          </ul>

          {/* Button */}
          <div className="hidden md:flex items-center">
          <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
              >
            <button className="bg-red-600 text-white px-4 py-3 px-10 rounded hover:bg-red-500 rounded-full text-lg cursor-pointer border-2 border-red-600 hover:border-white transition duration-300 ease-in-out">
              Contact Us
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-4xl text-white"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Background (blur and close on click) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
          onClick={handleCloseMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header Section with Logo and Cancel Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700 text-white">
          {/* Logo and Logo Name */}
          <div className="flex items-center space-x-2">
            {/* <img src={Logo} alt="Logo" className="h-8 w-8" /> */}
            <NavLink to="/" className="text-xl font-bold" onClick={handleCloseMenu}>
              GSAAB
            </NavLink>
          </div>

          {/* Cancel Button */}
          <button
            onClick={handleCloseMenu}
            className="text-2xl text-white"
          >
            ✖
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-8 p-6">
          <li>
          <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
                onClick={handleCloseMenu}
              >
                About Us
              </Link>
          </li>
          <li>
          <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
                onClick={handleCloseMenu}
              >
                Services
              </Link>
          </li>
          <li>
          <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
                onClick={handleCloseMenu}
              >
                Pricing
              </Link>
          </li>
          <li>
          <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-red-400 cursor-pointer"
              >
            <button
              className="bg-red-400 text-gray-800 px-4 py-2 rounded hover:bg-red-500"
              onClick={handleCloseMenu}
            >
              Contact Us
            </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;