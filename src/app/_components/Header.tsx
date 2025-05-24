import Image from 'next/image';
import HomeBanner from '@/assets/images/home-banner.jpg';
import { FaLocationArrow } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="h-[100vh] relative">
      <Image
        src={HomeBanner}
        alt="Home Page Banner Image"
        className="h-[100vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold md:font-bold mb-6 text-center text-gray-300">
          Courier Made Easy
        </h1>
        <p className="text-lg md:text-xl font-thin text-center mb-8 max-w-2xl px-6">
          Fast, reliable, and secure delivery services for all your shipping
          needs. Track your parcels in real-time and enjoy seamless logistics
          solutions.
        </p>
        <button className="px-5 md:px-7 py-2 md:py-2 bg-blue-600 hover:bg-blue-700 text-md font-semibold transition-colors rounded-full">
          Track Your Parcel <FaLocationArrow className="inline ml-2" />
        </button>
      </div>
    </header>
  );
};

export default Header;
