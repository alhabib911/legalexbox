import React from "react";

const SecondSection = () => {
  return (
    <div className="lg:pt-24 md:pt-10 pt-5 lg:pl-28 flex lg:flex-row flex-col">
      <div className="lg:w-2/5 w-full lg:text-left text-center lg:px-0 md:px-10 px-5">
        <h1 className="lg:text-4xl md:text-2xl text-xl text-white font-bold lg:w-9/12 lg:pt-16 md:pt-8 pt-5">
          A Website That Impresses
        </h1>
        <p className="pt-8 text-gray-500 text-lg lg:w-11/12 font-semibold">
          For over 20 years, we’ve created great lawyer websites that create a
          stunning first impression. You deserve a great website too.
        </p>
        <h3 className="text-xl font-semibold text-white pt-10">
          What We Offer
        </h3>
        <p className="pt-5 lg:w-10/12 text-lg text-gray-500">
          Website Design, Branding Design, Mobile-Friendly Websites, Logo
          Design, Complete Website Control.
        </p>
        <div>
          <button className="bg-[#4E89E1] lg:mt-16 md:mt-8 mt-5 rounded-md px-12 py-3 text-white font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="lg:px-0 md:px-10 px-5">
        <div className="secondSection">
          <img src="/img-content-karentosh.png" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
