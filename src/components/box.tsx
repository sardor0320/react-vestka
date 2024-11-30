import React from "react";

const AISection = () => {
  return (
    <div className="px-[6rem]">
      <div className="bg-gradient-to-r w-full from-purple-600 to-cyan-400 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg mx-auto md:mt-0 mt-[25rem]">
        <div className="w-full mb-8 md:mb-0 md:w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/fb82/c087/490cf4f3ddddfe807a6470e75cb276cf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMOEf~Omb6zkxfYoyYYvGCFnF12hvvybeO63zrYwLuWp7kAPK470pmvxPII~tqdWqk076QiNitRJiRFwUiEQGHQAzj2DfzDgWifHOvJwLlKQtmcbQeptivsPgvBCJWKBoqdP6-F4ujeh5U4aDM5Wqb9ILbZE~cEj-p43o7AE7V5RUKcFRGtk66R765YLehZ9n6Hbm7tqQK8ugYBtsOFy0RaAfqDpjYOhJQJeK~ASRNHrMKd7fSVl3Kys5MpYqG5mv1NRWlyZS9RVMTCtJCrY7tYVxShEsaBwhSLrRORUjVY1AN4PUSXOcuS0-MAI0nfxmdseKgL16AQgfJSQPDHWUQ__" // Rasmni yo'lini moslang
            alt="3D Shape"
            className="w-full h-[30rem] object-contain"
          />
        </div>

        {/* Matn va Forma */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            <span className="font-thin">
              Get exponential reach <br /> via{" "}
            </span>
            <span className="text-white ">AI Marketing</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full md:w-2/3 p-3 rounded-full bg-white bg-opacity-20 placeholder-white focus:outline-none mb-4 md:mb-0 md:mr-4"
            />
            {/* Button */}
            <button className="w-full md:w-auto px-3 py-3 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300">
              Get in touch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;
