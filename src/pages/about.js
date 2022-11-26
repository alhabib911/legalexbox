import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const about = () => {
    return (
        <div className='bg-[#03142D]'>
            <Navbar />
            <h1 className='text-4xl text-center text-white pt-5'>About <span className='font-semibold'>Us</span></h1>
            <div className='flex justify-between mx-32 pt-16'>
                <img className='h-[450px]' src="/dirk-min.png" alt="" />
                <p className='text-3xl text-white w-1/3 pt-20'>We help lawyers create stunning website designs and get to the top of search results.</p>
                <img className='h-[450px]' src="/janessa-min.png" alt="" />
            </div>
            <div className='bg-white mt-28 mx-64 py-10 px-10 rounded-md'>
                <h1 className='text-center text-4xl font-semibold'>Legal Marketing Done Right</h1>
                <p className='text-center pt-2 text-xl'>Let's work together and get started.</p>
            </div>
            <div className='flex justify-center gap-16 pt-10'>
                <div className='w-1/3'>
                    <img className='h-[550px]' src="/jo.png" alt="" />
                </div>
                <div className='w-1/3 text-white'>
                    <h1 className='text-5xl'>Our Story</h1>
                    <p className='pt-10'>In 2001, Daniel Todd entered a business plan competition at BYU-Hawaii for a company called “Law Firm Sites.” Dan ended up losing that competition to a laundromat business plan. However, through grit, hard work, and many late nights, Dan vowed to grow his business bigger than not only that laundromat company but also the companies of the competition’s judges.</p>
                    <p className='pt-8'>Over 10 years later, after trying to brand out and create websites for other industries, the Law Firm Sites team quickly found that the clients weren’t half as good as lawyers were, so they decided to focus solely on Law Firms. The legal industry contained such a high caliber of people. Law Firm Sites has NEVER been taken advantage of by a lawyer. Ever.</p>
                    <p className='pt-8'>In 2020, Jo and Dirk Stephens purchased the company. As they entered into Law Firm Sites’ 20th year, they look forward to growing the company even further.</p>
                </div>
            </div>
            <div className='bg-white py-10'>
                <h1 className='py-6 text-center text-4xl font-semibold'>Valuable Clients</h1>
                <div className='grid grid-cols-6 mx-28 gap-4'>
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