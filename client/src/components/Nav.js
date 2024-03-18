import React from 'react';

function Navbar() {
  return (
    <nav className="py-4 transition duration-300 ease-in-out rounded-full shadow-lg bg-slate-800 hover:bg-slate-700">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl text-white">Beauty of Bhedaghat Marbles</span>
          </div>
          <div className="hidden md:flex">
            <a href="#featured" className="mx-4 text-white transition duration-300 ease-in-out hover:text-gray-300">Featured</a>
            <a href="#about" className="mx-4 text-white transition duration-300 ease-in-out hover:text-gray-300 ">About Us</a>
            <a href="#gallery" className="mx-4 text-white transition duration-300 ease-in-out hover:text-gray-300 ">Gallery</a>
            <a href="#contact" className="mx-4 text-white transition duration-300 ease-in-out hover:text-gray-300 ">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
