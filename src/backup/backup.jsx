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
    <div className="relative h-screen overflow-hidden">
      {/* Background Grid of Images */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 gap-0 z-0">
        <img src={image1} alt="Art 1" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
        <img src={image2} alt="Art 2" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
        <img src={image3} alt="Art 3" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
        <img src={image4} alt="Art 4" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
        <img src={image5} alt="Art 5" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
        <img src={image6} alt="Art 6" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
        <img src={image7} alt="Art 7" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
        <img src={image8} alt="Art 8" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-60 px-4 md:px-8 lg:px-12 xl:px-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Fractionalize the Blue-chip Fine Arts for Everyone
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-6 leading-relaxed">
          Amalgamation of Fine Art legacy and Blockchain Technology! A
          fractionalization trading protocol for blue-chip fine arts.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            CLAIM UNITY 1
          </button>
          <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            <a href="https://openai.com/chatgpt/" target="_blank" rel="noopener noreferrer">ARTFI TOKEN</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
