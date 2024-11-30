import rightImg from '../assets/50.png'
import lin from '../assets/Line 2.png'

function Boxcont() {
    return (
        <div>

            <div className='container'>
                {/* content */}
                <div className="bg-black min-h-screen flex items-center justify-between px-10">
                    {/* Matn qismi */}
                    <div className="text-left">
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
                            <span className='text-white'>Optimized Reach</span>
                        </h1>
                        <p className="mt-4 text-white text-lg max-w-[500px]">
                        DOML is a digital media agency powered by AI technology on your business and providing real time,  <span className='text-blue-700'>data-driven insights</span>  audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and <span className='text-blue-700'>strategic execution</span> .</p>
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
    rounded-[50px]  /* Border radius */
    px-8  /* Padding for consistency */
    py-1.5  /* Adjusted height */
    inline-flex
    items-center
    text-lg  /* Font size */
  "
>
  Learn More
  <svg
    className="w-5 h-5 ml-5"  /* Icon size and spacing similar to "Get Started" */
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
                            src={rightImg} /* Bu yerga rasmingiz joylashgan yo'lni kiriting */
                            alt="asd"
                            className="max-w-lg ml-20 rounded-full shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Boxcont;