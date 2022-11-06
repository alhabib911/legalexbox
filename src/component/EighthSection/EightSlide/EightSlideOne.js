import React from 'react';

const EightSlideOne = () => {
    return (
        <div className='flex mx-20 mt-10 gap-5 bg-[#0c1126]'>
            <div className='px-10'>
                <h3 className='text-2xl font-bold text-white pt-16'>Smith Law Group</h3>
                <p className='pt-8 text-lg text-gray-400'>We designed Gabriella Smith's website to showcase a very clean and modern site. This is one of our most popular designs, and for good reason!</p>
                <div className='flex justify-evenly pt-8 text-gray-400'>
                    <p className='border px-10 py-2 rounded-2xl'>Business Law</p>
                    <p className='border px-10 py-2 rounded-2xl'>Immigration Law</p>
                </div>
            </div>
            <div>
                <img className='h-[350px] w-[1200px] rounded-2xl' src="./gnslawpllc.jpg.webp" alt="" />
            </div>
        </div>
    );
};

export default EightSlideOne;