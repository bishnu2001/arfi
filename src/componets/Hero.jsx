import React from "react";
import image1 from "./images/Picture 01.png";
import image2 from "./images/Picture 02.png";
import image3 from "./images/Picture 03.png";
import image4 from "./images/Picture 04.png";
import image5 from "./images/Picture 05.png";
import image6 from "./images/Picture 06.png";
import image7 from "./images/Picture 07.png";
import image8 from "./images/Picture 08.png";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Grid of Images */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 gap-0 z-0">
        <img src={image1} alt="Art 1" className="object-cover w-full h-full" />
        <img src={image2} alt="Art 2" className="object-cover w-full h-full" />
        <img src={image3} alt="Art 3" className="object-cover w-full h-full" />
        <img src={image4} alt="Art 4" className="object-cover w-full h-full" />
        <img src={image5} alt="Art 5" className="object-cover w-full h-full" />
        <img src={image6} alt="Art 6" className="object-cover w-full h-full" />
        <img src={image7} alt="Art 7" className="object-cover w-full h-full" />
        <img src={image8} alt="Art 8" className="object-cover w-full h-full" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 px-4 md:px-8 lg:px-12 xl:px-16">
        <span className="text-[32px] lg:text-[60px] md:text-[42px] font-bold leading-[37.44px] lg:leading-[60px] md:leading-[46.2px] mt-16 lg:mt-36 h-28 lg:h-1">
          Fractionalize the Blue-chip Fine Arts for Everyone
        </span>
        <span className="text-white-79 text-[13px] lg:text-[32px] md:text-[24px] leading-[20.72px] lg:leading-[41.6px] md:leading-[31.2px] font-normal w-[100%] md:w-[86%] lg:w-[81%] mb-6 mt-[12px] md:mt-[12px] lg:mt-[200px]">
        {/* <span className="text-[20px] w-[70%] leading-[26.6px] md:leading-[23.6px] font-thin mb-6"> */}
          Amalgamation of Fine Art legacy and Blockchain Technology! A
          fractionalisation trading protocol for blue-chip fine arts.
        </span>
        <div className="flex flex-col md:flex-col md:gap-[20px] lg:flex-row lg:space-x-4 space-y-4 sm:space-y-0 items-center justify-center text-white mt-[10px] md:mt-[6px] lg:mt-[70px]">
          <button className="bg-gradient-unity text-[12px] md:text-[20px] lg:text-[26px] font-bold py-3 px-4 lg:px-6 rounded-full w-[208px] md:w-[352px] lg:w-[364px] h-[56px] md:h-[64px] lg:h-[76px]">
            CLAIM UNITY 1
          </button>
          <button className="bg-transparent text-[18px] lg:text-[26px] md:text-[20px] border border-white font-bold py-3 px-4 lg:px-6 rounded-full w-[208px] md:w-[352px] lg:w-[364px] h-[56px] md:h-[64px] lg:h-[76px]">
            <a href="https://artfitoken.io/" target="_main">ARTFI TOKEN</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
