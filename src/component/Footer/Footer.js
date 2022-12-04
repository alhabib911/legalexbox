import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='lg:mx-24 md:mx-16 mx-8 lg:pt-24 md:pt-16 pt-8 flex lg:flex-row flex-col lg:gap-20'>
            <div className='lg:w-2/4 w-full'>
                <Link className='text-white lg:text-4xl text-3xl lg:text-left text-center' href={"/"}><span className='font-bold'>legalex</span><span className='font-normal'>box</span></Link>
                <p className='text-lg pt-5 text-gray-400 lg:text-left text-center'>At <span className='font-semibold'>Law Firm Sites</span>, we are dedicated to helping you get more cases through stunning website design and SEO.</p>
                <div className='flex lg:flex-row md:flex-row flex-col items-center whitespace-nowrap mt-8 gap-8 googleFooter px-8 lg:py-8 py-4'>
                    <div>
                        <h2 className='text-xl font-bold text-white'>Happy With Your Service?</h2>
                        <p className='text-lg font-thin text-gray-400'>Leave us a review on Google</p>
                    </div>
                    <div>
                        <img src="./icon-googlereview.png" alt="" />
                    </div>
                </div>
                <p className='text-white lg:pt-8 lg:pb-28 lg:visible md:invisible invisible'>© 2001-2022 legalexbox, Inc. All rights reserved. | Privacy Policy</p>
            </div>
            <div className='flex justify-between lg:w-2/5 w-full'>
                <div className='w-1/2'>
                    <h2 className='text-white font-semibold text-xl'>Quick Links</h2>
                    <p className='text-gray-400 text-lg pt-8'>About Us</p>
                    <p className='text-gray-400 text-lg pt-2'>Testimonials</p>
                    <p className='text-gray-400 text-lg pt-2'>Review</p>
                    <p className='text-gray-400 text-lg pt-2'>Contact</p>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-white font-semibold text-xl'>Contact Us</h2>
                    <p className='text-gray-400 text-lg pt-8'>Sales Support – Toll Free</p>
                    <p className='text-gray-400 text-lg'>(800) 932-8242</p>
                    <p className='text-gray-400 text-lg pt-8'>Local</p>
                    <p className='text-gray-400 text-lg'>801-770-7089</p>
                </div>
            </div>
            <div className='lg:w-1/12 w-full lg:pt-0 pt-5'>
                <div className='text-right text-white lg:text-3xl md:text-2xl text-xl flex lg:flex-col flex-row justify-center gap-8 cursor-pointer'>
                    <FaFacebookF />
                    <BsTwitter />
                    <FaLinkedinIn />
                </div>
            <p className='text-white pt-8 pb-16 text-center lg:invisible md:visible visible'>© 2001-2022 legalexbox, Inc. All rights reserved. | Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;