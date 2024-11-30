import { Button } from 'flowbite-react';
import heroRight from '../../assets/hero-right-img.png';
import lin from '../../assets/Line 2.png';
import './hom.css';
import Footerlogo from '../Footer/moote';

function Hom() {
  return (
    <div className="container">
      {/* content */}
      <div className="bg-black min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 lg:px-10">
        {/* Main content */}
        <div className="text-left max-w-full lg:max-w-2xl xl:max-w-3xl">
          <h1
            style={{
              fontFamily: 'Al Nile,Roboto, sans-serif',
              fontSize: '72px',
              fontWeight: 400,
              lineHeight: '90px',
              textAlign: 'left',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              background: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI Marketing.
            <br />
            <span style={{ color: 'white' }}>Optimized Reach.</span>
          </h1>

          <p className="mt-5 text-white text-2xl max-w-[660px]">
            Our vision is to revolutionize the way brands and advertir target, reach.
          </p>
          <br />
          <br />
          <div>
            <img src={lin} alt="" />
          </div>
          <br />
          <div className="mt-6">
          <button
  className="
    text-white
    bg-transparent
    border-1
    border-gray-300
    bg-gradient-to-r
    from-cyan-500
    to-purple-500
    hover:from-purple-500
    hover:to-cyan-500
    focus:ring-4
    focus:outline-none
    focus:ring-blue-300
    font-sans
    rounded-[50px]  <!-- Updated border-radius here -->
    px-8
    py-1.5
    inline-flex
    items-center
    text-lg
  "
>
  Get Started
  <svg
    className="w-5 h-5 ml-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</button>

          </div>
        </div>

        {/* Image section */}
        <div className="mt-10 lg:mt-0">
          <img
            src={heroRight}
            alt="3D Globe"
            className="max-w-xs sm:max-w-md lg:max-w-lg rounded-full shadow-lg"
          />
        </div>
      </div>
      <Footerlogo/>
    </div>
  );
}

export default Hom;
