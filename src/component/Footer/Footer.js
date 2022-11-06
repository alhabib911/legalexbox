import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='mx-24 pt-24 flex gap-20'>
            <div className='w-2/4'>
            <h1 className='text-white text-4xl'><span className='font-bold'>legalex</span><span className='font-normal'>box</span></h1>
                <p className='text-lg pt-5 text-gray-400'>At <span className='font-semibold'>Law Firm Sites</span>, we are dedicated to helping you get more cases through stunning website design and SEO.</p>
                <div className='flex items-center whitespace-nowrap mt-8 gap-8 googleFooter px-8 py-8'>
                    <div>
                        <h2 className='text-xl font-bold text-white'>Happy With Your Service?</h2>
                        <p className='text-lg font-thin text-gray-400'>Leave us a review on Google</p>
                    </div>
                    <div>
                        <img src="./icon-googlereview.png" alt="" />
                    </div>
                </div>
                <p className='text-white pt-8 pb-28'>© 2001-2022 legalexbox, Inc. All rights reserved. | Privacy Policy</p>
            </div>
            <div className='flex justify-between w-2/5'>
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
            <div className='w-1/12'>
                <div className='text-right text-white text-3xl flex flex-col gap-8 cursor-pointer'>
                    <FaFacebookF />
                    <BsTwitter />
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
    );
};

export default Footer;