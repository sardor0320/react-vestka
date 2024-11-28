import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from "../../assets/Rectangle 10.png";

const SliderCard = ({ name, title, description }: { name: string, title: string, description: string }) => {
  return (
    <div className="h-[300px] w-full flex bg-gradient-to-r from-purple-500 to-cyan-500 p-6 rounded-lg">
      <div className="flex w-full">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={user} alt="User" className="w-[100px] rounded-lg" />
        </div>
        <div className="w-1/2 text-left flex flex-col justify-center h-full">
          <p className="text-white font-semibold text-[20px] leading-[39.38px] font-[Montserrat] mb-4">
            {description}
          </p>
          <h3 className="text-white font-bold mt-4">{name}</h3>
          <p className="text-white">{title}</p>
          <button className="mt-4 bg-white text-purple-500 px-4 py-2 rounded-lg shadow hover:bg-purple-500 hover:text-white transition duration-300">
            Discord
          </button>
        </div>
      </div>
    </div>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: false, 
    autoplaySpeed: 3000, 
    pauseOnHover: true, 
    prevArrow: (
      <button className="slick-prev slick-arrow bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next slick-arrow bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        →
      </button>
    ),
  };

  return (
    <div className="py-24 px-6 w-full max-w-screen-xl mx-auto relative">
      <Slider {...settings}>
        <SliderCard 
          name="Amaka Micheal"
          title="Media Executive, Buying & Control"
          description="It's all about getting your message in front of the right audience and creating those valuable relationships. Learn more about how DOML can help you do just that - all with a simple, easy-to-use platform."
        />
        <SliderCard 
          name="Amaka Micheal"
          title="Media Executive, Buying & Control"
          description="It's all about getting your message in front of the right audience and creating those valuable relationships. Learn more about how DOML can help you do just that - all with a simple, easy-to-use platform."
        />
      </Slider>
    </div>
  );
};

export default SliderComponent;
