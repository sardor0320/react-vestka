import rightImg from '../../assets/1.png'

function About() {
    return (
        <div>

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
                        DOML is a digital media agency powered by AI technology providing real time, data-driven insights on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and strategic execution.                        </p>
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
    bg-origin-border
        "
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

                    {/* Rasm qismi */}
                    <div>
                        <img
                            src={rightImg} /* Bu yerga rasmingiz joylashgan yo'lni kiriting */
                            alt="3D Globe"
                            className="max-w-lg rounded-full shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About