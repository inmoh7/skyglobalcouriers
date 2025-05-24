import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-between flex-wrap bg-black opacity-90 px-4 py-6">
        <div className="flex flex-col p-4 max-w-xl">
          <div className="text-lg font-semibold text-blue-500 mb-2">About</div>
          <div className="text-white">
            <p>
              Sky Global Couriers is a leading logistics provider, offering fast
              and reliable delivery services worldwide. Our mission is to ensure
              your parcels reach their destination safely and on time.
            </p>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col items-center bg-black opacity-80 p-4">
            <h2 className="text-lg font-semibold text-blue-500 mb-3">
              Useful Links
            </h2>
            <div className="text-white flex flex-col gap-1">
              <div className="hover:text-blue-500">
                <Link href="/">Home</Link>
              </div>
              <div className="hover:text-blue-500">
                <Link href="/services">Our Services</Link>
              </div>
              <div className="hover:text-blue-500">
                <Link href="/contact">Contact Us</Link>
              </div>
              <div className="hover:text-blue-500">
                <Link href="/about">About Us</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-black opacity-80 p-4">
            <h2 className="text-lg font-semibold text-blue-500 mb-3">
              Get In Touch
            </h2>
            <div className="text-white flex flex-col gap-1">
              <div>
                <a href="tel:+11234567890">Phone: +1 (123) 456-7890</a>
              </div>
              <div>
                <a href="mailto:glskycouriers@gmail.com">
                  Email: glskycouriers@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://maps.google.com/?q=xyz+street+Negombo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Address: xyz street, Negombo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-black">
        <div className="text-center text-gray-300 text-sm py-4">
          All rights reserved &copy; Sky Global Couriers ,{' '}
          {new Date().getFullYear()}
        </div>
        <div className="text-center text-gray-300">
          Developed With ❤️ by{' '}
          <span className="font-semibold">
            <a
              href="https://www.linkedin.com/in/inmoh7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infas
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
