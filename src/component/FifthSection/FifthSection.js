import Link from 'next/link';
import React from 'react';

const FifthSection = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center lg:mx-28 md:mx-16 mx-8 gap-5 lg:pt-28 pt-16'>
            <div className='lg:w-1/3 w-full lg:text-left text-center'>
                <h1 className='lg:text-[44px] md:text-3xl text-2xl text-white font-medium'>The Faces <br /> of Law Firm Sites</h1>
                <p className='lg:pt-10 pt-6 text-gray-400 text-lg'>It’s our job to make you look great. When you choose our services, we fully see ourselves as part of your team. We pride ourselves in being ridiculously responsive and invested in your success.</p>
                <button className="bg-[#4E89E1] lg:mt-10 mt-6 rounded-md px-12 lg:py-3 py-2 text-white font-semibold">
                    <Link href={"/team"}>MEET THE TEAM</Link>
                </button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 w-2/3 lg:gap-8 gap-16'>
                <div><img src="/img-jo.jpg.webp"/></div>
                <div><img src="/img-dirk.jpg.webp"/></div>
                <div><img src="/img-emma.jpg.webp"/></div>
            </div>
        </div>
    );
};

export default FifthSection;