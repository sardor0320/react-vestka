import rightImg from '../assets/1.png'
import lin from '../assets/Line 2.png'

function Section() {
    return (
        <div>
            <div className='container'>
                {/* content */}
                <div className="bg-black min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-16">
                    {/* Matn qismi */}
                    <div className="text-left lg:w-1/2">
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
                            DOML is a digital media agency powered by AI technology providing real time, on your business and <span className='text-blue-700'>data-driven insights</span> audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and <span className='text-blue-700'>strategic execution</span>.
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

                    {/* Rasm qismi */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img
                            src={rightImg}
                            alt=""
                            className="max-w-lg  w-full rounded-full shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section;
