import { Button } from 'flowbite-react'
import heroRight from '../../assets/hero-right-img.png'
import "./hero.css"
function Hero() {
    return (
        <div className='container'>
            {/* content */}
            <div className="bg-black min-h-screen flex items-center justify-between px-10">
  {/* Matn qismi */}
  <div className="text-left">
    <h1
      className="
        text-[72.62px] 
        font-normal 
        leading-[99.13px] 
        underline 
        underline-offset-0 
        decoration-skip-ink 
        decoration-from-font 
        w-[581px] 
        bg-gradient-to-r 
        from-[#00F0FF] 
        via-[#5200FF] 
        to-[#FF2DF7] 
        text-transparent 
        bg-clip-text"
    >
      AI Marketing.
      <br />
      <span className='text-white'>Optimized Reach.</span>
    </h1>
    <p className="mt-4 text-white text-lg max-w-[500px]">
      Our vision is to revolutionize the way brands and advertisers target, reach.
    </p>
    <div className="mt-6">
      <button
        className="
          text-white 
          bg-gradient-to-r 
          from-cyan-500 
          to-purple-500 
          hover:from-purple-500 
          hover:to-cyan-500 
          focus:ring-4 
          focus:outline-none 
          focus:ring-blue-300 
          font-medium 
          rounded-lg 
          text-sm 
          px-6 
          py-3 
          inline-flex 
          items-center
        "
      >
        Get Started
        <svg
          className="w-4 h-4 ml-2"
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

  {/* Rasm qismi */}
  <div>
    <img
      src={heroRight} /* Bu yerga rasmingiz joylashgan yo'lni kiriting */
      alt="3D Globe"
      className="max-w-lg rounded-full shadow-lg"
    />
  </div>
</div>

        </div>
    )
}

export default Hero