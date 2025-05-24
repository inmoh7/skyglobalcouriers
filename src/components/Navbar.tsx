'use client';

import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 right-0 left-0 mx-4 md:left-1/2 md:-translate-x-1/2 md:min-w-fit bg-black opacity-60 shadow-lg rounded-full text-white z-50 border border-blue-500">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center p-3 gap-5">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-600"
              aria-label="Toggle menu"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className="relative">
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={toggleMenu}
          />
        )}
        {/* Menu Panel */}
        <div
          className={`fixed inset-y-0 right-0 w-3/4 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-50`}
        >
          <div className="flex flex-col p-8 space-y-4">
            <button
              onClick={toggleMenu}
              className="self-end text-white hover:text-blue-600 mb-8"
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>
            <Link href="/" className="text-white hover:text-blue-500 text-lg">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-500 text-lg"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-blue-500 text-lg"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-500 text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
