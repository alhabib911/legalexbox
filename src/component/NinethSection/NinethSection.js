import React from 'react';

const NinethSection = () => {
    return (
        <div className='lg:pt-24 md:pt-16 pt-8'>
            <div className='flex lg:flex-row flex-col lg:mx-28 md:mx-16 mx-5 ninethSectionGradient px-10 py-10 rounded-3xl'>
                <div className='lg:w-2/6 w-full'>
                    <h1 className='lg:text-5xl md:text-3xl text-2xl text-white font-bold '>Still Not Convinced?</h1>
                    <p className='text-xl text-gray-400 pt-8'>We’re confident you’ll love your site in a new look. Sign up for a free website design and receive it in 24 hours.</p>
                    <h3 className='text-xl text-white font-semibold pt-12'>No Obligation. No Charge.</h3>
                    <h4 className='text-xl text-[#335386] font-bold'>Seriously.</h4>
                </div>
                <div>
                    <img className='lg:w-[1100px] lg:h-[450px]' src="./img-callbar-right.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NinethSection;