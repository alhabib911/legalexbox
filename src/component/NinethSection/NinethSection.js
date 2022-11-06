import React from 'react';

const NinethSection = () => {
    return (
        <div className='pt-24'>
            <div className='flex mx-28 ninethSectionGradient px-10 py-10 rounded-3xl'>
                <div className='w-2/6'>
                    <h1 className='text-5xl text-white font-bold '>Still Not Convinced?</h1>
                    <p className='text-xl text-gray-400 pt-8'>We’re confident you’ll love your site in a new look. Sign up for a free website design and receive it in 24 hours.</p>
                    <h3 className='text-xl text-white font-semibold pt-12'>No Obligation. No Charge.</h3>
                    <h4 className='text-xl text-[#335386] font-bold'>Seriously.</h4>
                </div>
                <div>
                    <img className='w-[1100px] h-[450px]' src="./img-callbar-right.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NinethSection;