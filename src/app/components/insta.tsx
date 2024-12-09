import React from "react";

const InstagramSection = () => {
  return (
    <div
      className=" w-[1440px] h-[450px] relative bg-cover bg-center bg-no-repeat  flex justify-center items-center"
      style={{ backgroundImage: "url('/ib.png')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-black px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Instagram</h1>
        <p className="text-lg md:text-xl mb-6">
        Follow our store on Instagram
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default InstagramSection;
