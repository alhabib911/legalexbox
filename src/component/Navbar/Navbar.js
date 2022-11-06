import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
            <div className='grid grid-cols-3 items-center text-white lg:mx-28 md:mx-10 mx-5 lg:py-5 md:py-2'>
                <div>
                    <h1 className=' lg:text-5xl md:text-4xl text-xl w-1/2'><span className='font-bold'>legalex</span><span className='font-normal'>box</span></h1>
                </div>
                <div className='flex gap-12 lg:visible invisible'>
                    <Link href={"/about"}>About Us</Link>
                    <Link href={"/service"}>Service</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
                <div>
                    <Link href={"/login"}>
                        <h3 className='text-right'>Client Login</h3>
                    </Link>
                </div>
            </div>
    );
};

export default Navbar;