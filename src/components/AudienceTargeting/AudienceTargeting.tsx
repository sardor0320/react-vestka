import leftimg from '../../assets/18.png'
function AudienceTargeting() {
    return (
      <div className="bg-black py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            {/* Bu yerda rasm yoki boshqa kontent joylashtirish mumkin */}
            <div className="h-64 w-[500px] rounded-md flex items-center justify-center text-white">
                <img src={leftimg} alt="" />
            </div>
          </div>
  
          {/* Right Side */}
          <div className="lg:w-1/2 text-left order-1 lg:order-2">
            <h1
              className="
                text-[42px] lg:text-[72.62px] 
                font-normal 
                leading-[1.2] 
                underline 
                underline-offset-0 
                decoration-skip-ink 
                decoration-from-font 
                bg-gradient-to-r 
                from-[#00F0FF] 
                via-[#5200FF] 
                to-[#FF2DF7] 
                text-transparent 
                bg-clip-text"
            >
              AI Marketing.
              <br />
              <span className="text-white">Optimized Reach.</span>
            </h1>
            <p className="mt-4 text-white text-lg max-w-[500px]">
              DOML is a digital media agency powered by AI technology providing
              real-time, data-driven insights on your business and audience. The
              mission of DOML is to create the best experiences for companies
              through intelligent insights, powerful analytics, and strategic
              execution.
            </p>
            <div className="mt-6">
              <button
                className="
                  text-white 
                  border-[0.78px] border-image-gradient
                  bg-none
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
                  bg-clip-border 
                  bg-origin-border"
              >
                Learn more
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
        </div>
      </div>
    );
  }
  
  export default AudienceTargeting;
  