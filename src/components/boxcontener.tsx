import leftimg from '../assets/18.png'
import lin from "../assets/Line 2.png"

function Contenerbox() {
    return (
      <div className="bg-black py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            {/* Image container */}
            <div className="h-64 w-full max-w-[500px] rounded-md flex items-center justify-center text-white">
                <img src={leftimg} alt="" className="w-full h-full object-cover rounded-md"/>
            </div>
          </div>
  
          {/* Right Side */}
          <div className="lg:w-1/2 text-left order-1 lg:order-2">
            <h1
              style={{
                fontFamily: 'Al Nile,Roboto, sans-serif',
                fontSize: '60px',
                fontWeight: 400,
                lineHeight: '80px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                background: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              AI Marketing
              <br />
              <span className="text-white">Optimized Reach</span>
            </h1>
            <p className="mt-4 text-white text-lg max-w-[500px]">
              It's all about getting your message in front of the right audience and creating those valuable. Learn More  <span className='text-blue-700'>relationships</span>  about how DOML can help you do just that - all with a simple, easy-to-use platform.
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
                  rounded-[50px]
                  px-8
                  py-1.5
                  inline-flex
                  items-center
                  text-lg
                "
              >
                Learn More
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
        </div>
      </div>
    );
}

export default Contenerbox;
