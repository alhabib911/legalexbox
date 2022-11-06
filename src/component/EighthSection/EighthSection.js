import React from 'react';
import EighthSlider from './EighthSlider';

const EighthSection = () => {
    return (
        <div className='lg:pt-28 md:pt-16 pt-8'>
            <h1 className='text-center text-4xl text-white'>Our Clients</h1>
            <p className='text-lg text-gray-400 text-center pt-3'>We love our clients and their projects <br /> here are some of our favorites</p>
            <EighthSlider />
            <div className='flex justify-center'>
                <button className="bg-[#4E89E1] lg:mt-16 md:mt-8 mt-5 rounded-md px-12 py-3 text-white font-semibold">
                    SEE FULL PORTFOLIO
                </button>
            </div>
        </div>
    );
};

export default EighthSection;