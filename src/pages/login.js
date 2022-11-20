import Link from 'next/link';
import React from 'react';
import Footer from '../component/Footer/Footer';
import { FcGoogle } from 'react-icons/fc';

const login = () => {
    return (
        <div className='bg-[#0E1F33]'>
            <div className='pt-16'></div>
            <div className='bg-white mx-80 rounded'>
                <div className='flex items-center justify-center text-xl gap-2 font-semibold pt-10 pb-4'>
                    <div className='border flex items-center gap-2 py-2 px-24 rounded-md hover:bg-[#0E1F33] hover:text-white hover:cursor-pointer'>
                        <FcGoogle />
                        <p>Login with Google</p>
                    </div>
                </div>
                <h2 className='text-center text-[#0E1F33] font-bold'>OR</h2>
                <div className='pt-5 flex justify-center'>
                    <form>
                        <label className='pl-2 font-semibold' htmlFor="email">Email</label> <br />
                        <input className='w-96 py-2 rounded-md pl-4 text-lg outline-none border bg-white' type="text" name="" id="" placeholder='Your Email Please' />  <br />
                        <label className='pl-2 font-semibold' htmlFor="password">Password</label> <br />
                        <input className='w-96 py-2 rounded-md pl-4 text-lg outline-none border bg-white' type="password" name="" id="" placeholder='Your Password Please' /> <br />
                        <div className='flex justify-center pt-6 '>
                            <input className='bg-[#0E1F33] px-12 py-2 rounded-md text-white font-semibold text-xl cursor-pointer' type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <div className='text-center pt-5 flex items-center justify-center gap-2'>
                    <p>Don't have an Account?</p>
                    <Link href={"/Signup"}>
                        <p className='text-center py-8 font-semibold text-[#0E1F33]'>SignUp Now</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default login;