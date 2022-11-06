import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-20 py-6'>
            <div>
                <h1 className='text-white text-5xl'><span className='font-bold'>legalex</span><span className='font-normal'>box</span></h1>
            </div>
            <div>
                <div className='flex text-white gap-12 text-lg font-semibold '>
                    <Link href={"/about"}>About Us</Link>
                    <Link href={"/service"}>Service</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
            </div>
            <div className='flex text-white items-center gap-10'>
                <Link href={"/login"}>
                <h3 className='text-lg font-medium'>Client Login</h3>
                </Link>
                <h3 className='text-lg font-medium bg-[#375E93] px-8 py-3 rounded-md'>Let's Get Started</h3>
            </div>
        </div>
    );
};

export default Navbar;