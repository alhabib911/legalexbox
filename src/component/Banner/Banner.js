import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex lg:flex-row md:flex-col flex-col lg:pl-20 '>
            <div className='lg:w-2/5 w-full lg:pt-14 md:pt-8'>
                <div className='flex justify-center lg:flex-col flex-row gap-3'>
                    <h1 className='text-white lg:text-6xl md:text-5xl text-3xl font-semibold py-2 '>Websites.</h1>
                    <h1 className='text-white lg:text-6xl md:text-5xl text-3xl font-semibold py-2'>Marketing.</h1>
                </div>
                <div className='flex justify-center lg:flex-col flex-row'>
                    <h1 className='text-[#4E89E1] lg:text-6xl md:text-5xl text-3xl font-semibold lg:py-2'>Just for Lawyers.</h1>
                </div>
                <p className='lg:text-2xl md:text-xl text-lg pt-8 lg:mx-0 md:mx-8 mx-5'>
                    <span className='text-white'>At </span>
                    <span className='text-[#4E89E1]'>Law Firm Sites</span>
                    <span className='text-white'>, we are dedicated to helping you get more cases through stunning website design and SEO.</span>
                </p>
                <div className='flex justify-center'>
                    <Link href={"/contacts"} className='bg-[#4E89E1] lg:mt-16 mt-8 rounded-md px-8 lg:py-3 py-2 text-white font-semibold'>
                        LET'S GO
                    </Link>
                </div>
            </div>
            <div className='lg:w-3/5 w-full lg:mx-0 px-9 lg:pt-16 pt-8 flex justify-center'>
                <img className='lg:w-[728px] lg:h-[560px]' src="/img-banner-v2.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;