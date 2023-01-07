import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
            <div className='grid grid-cols-3 items-center text-white font-semibold lg:mx-28 md:mx-10 mx-5 lg:py-5 md:py-2'>
                <div>
                    <Link className=' lg:text-5xl md:text-4xl text-xl w-1/2' href={"/"}><span className='font-bold'>legalex</span><span className='font-normal'>box</span></Link>
                    <h1 ></h1>
                </div>
                <div className='flex md:gap-12 whitespace-nowrap'>
                    <Link href={"/about"}>About Us</Link>
                    <Link href={"/service"}>Service</Link>
                    <Link href={"/contacts"}>Contact</Link>
                </div>
                <div className='flex justify-end'>
                    <Link href={"/login"}>
                        <h3 className='bg-blue-700 lg:py-3 py-2 lg:px-16 px-8 pt-2 rounded-md whitespace-nowrap'>Login</h3>
                    </Link>
                </div>
            </div>
    );
};

export default Navbar;