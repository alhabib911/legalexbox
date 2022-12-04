import React from 'react';

const ThirdSection = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-12 lg:mx-28 md:mx-10 mx-5 lg:mt-24 md:mt-16 mt-8'>
            <div className='thirdSection lg:w-8/12 w-full h-[90%]'>
                <img src="/img-content-graph.png" alt="" />
            </div>
            <div className='lg:w-2/5 w-full text-center'>
                <h1 className="lg:text-4xl md:text-2xl text-xl text-white font-bold w-12/12 ">Get More Cases, Completely Organically.</h1>
                <p className="pt-8 text-gray-500 text-lg w-11/12 font-semibold">Our SEO experts work tirelessly to get you the results you’re hoping for. If you don’t see what you like, you don’t pay.</p>
                <h3 className="text-xl font-semibold text-white pt-10">What We Offer</h3>
                <p className="pt-5 text-lg text-gray-500">On-page SEO, Off-page SEO, Directory Listings, Social media Posting, Monthly SEO Reports, Dedicated SEO Manager, Local SEO, Content Marketing.</p>
                {/* <button className="bg-[#4E89E1] lg:mt-16 md:mt-8 mt-5 rounded-md px-12 lg:py-3 py-2 text-white font-semibold">
                    LEARN MORE
                </button> */}
            </div>
        </div>
    );
};

export default ThirdSection;