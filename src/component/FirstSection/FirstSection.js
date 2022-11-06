import React from 'react';

const FirstSection = () => {
    return (
        <div className='lg:px-36 md:px-10 px-5 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 pt-5'>
            <div className='flex items-center gap-5'>
                <img src="/icon-web.png.webp" alt="" />
                <h3 className='text-xl text-gray-400 cursor-pointer hover:text-blue-500'>Website Design</h3>
            </div>
            <div className='flex items-center gap-5'>
                <img src="/icon-branding.png" alt="" />
                <h3 className='text-xl text-gray-400 cursor-pointer hover:text-blue-500'>Branding</h3>
            </div>
            <div className='flex items-center gap-5'>
                <img src="/icon-seo.png.webp" alt="" />
                <h3 className='text-xl text-gray-400 cursor-pointer hover:text-blue-500'>SEO</h3>
            </div>
            <div className='flex items-center gap-5'>
                <img src="/icon-social.png.webp" alt="" />
                <h3 className='text-xl text-gray-400 cursor-pointer hover:text-blue-500'>Website Design</h3>
            </div>         
        </div>
    );
};

export default FirstSection;