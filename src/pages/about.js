import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const about = () => {
    return (
        <div className='bg-[#03142D]'>
            <Navbar />
            <h1 className='text-4xl text-center text-white pt-5'>About <span className='font-semibold'>Us</span></h1>
            <div className='flex justify-evenly lg:mx-16 md:mx-10 mx-5 lg:pt-16 md:pt-8 pt-5'>
                <img className='lg:h-[450px] md:h-[300px] h-[150px]' src="/dirk-min.png" alt="" />
                <p className='lg:text-3xl md:text-xl text-base lg:w-1/3 text-white lg:pt-20 md:pt-10 pt-6'>We help lawyers create stunning website designs and get to the top of search results.</p>
                <img className='lg:h-[450px] md:h-[300px] h-[150px]' src="/janessa-min.png" alt="" />
            </div>
            <div className='bg-white mt-28 lg:mx-64 py-10 px-10 rounded-md'>
                <h1 className='text-center lg:text-4xl text-2xl font-semibold'>Legal Marketing Done Right</h1>
                <p className='text-center pt-2 lg:text-xl text-base'>Let's work together and get started.</p>
            </div>
            <div className='lg:flex justify-center lg:gap-16 pt-10'>
                <div className='lg:w-1/3 w-0 h-0'>
                    <img className='lg:h-[550px] h-[300px]' src="/jo.png" alt="" />
                </div>
                <div className='lg:w-1/3 w-11/12 text-white lg:pl-0 pl-6'>
                    <h1 className='text-5xl lg:text-left text-center '>Our Story</h1>
                    <p className='pt-10'>In 2001, Daniel Todd entered a business plan competition at BYU-Hawaii for a company called “Law Firm Sites.” Dan ended up losing that competition to a laundromat business plan. However, through grit, hard work, and many late nights, Dan vowed to grow his business bigger than not only that laundromat company but also the companies of the competition’s judges.</p>
                    <p className='pt-8'>Over 10 years later, after trying to brand out and create websites for other industries, the Law Firm Sites team quickly found that the clients weren’t half as good as lawyers were, so they decided to focus solely on Law Firms. The legal industry contained such a high caliber of people. Law Firm Sites has NEVER been taken advantage of by a lawyer. Ever.</p>
                    <p className='pt-8 pb-6'>In 2020, Jo and Dirk Stephens purchased the company. As they entered into Law Firm Sites’ 20th year, they look forward to growing the company even further.</p>
                </div>
            </div>
            <div className='bg-white py-10'>
                <h1 className='py-6 text-center text-4xl font-semibold'>Valuable Clients</h1>
                <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:mx-28 md:mx-16 mx-8 gap-4'>
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                    <img src="/badge-google-review.jpg.webp" alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default about;