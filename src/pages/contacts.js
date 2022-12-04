import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const contacts = () => {
    return (
        <div className='bg-[#03142D]'>
            <Navbar />
            <div className='flex justify-between mx-32 pt-10'>
                <div className='text-white w-1/2'>
                    <h1 className='text-5xl font-semibold'>Get a Better Site.</h1>
                    <h1 className='text-5xl text-[#98DBF9] font-bold'>Get Better Cases.</h1>
                    <h6 className='text-2xl pt-5'>This is going to be good.</h6>
                    <div className='my-10 w-4/5 bg-[#152841] px-16 py-8 rounded-lg'>
                        <div className='flex items-center text-3xl gap-4 font-semibold'>
                            <h1 className='text-[#98DBF9]'><FaQuoteLeft /></h1>
                            <h2>Above and Beyond</h2>
                        </div>
                        <p className='text-lg'>” I have been in legal marketing for over 10 years and honestly, this is the best website agency I have ever worked with and is so reasonably priced too. Jo Stephens is tremendous and skillful, and fun to work with on top of it. Epitomizes “above and beyond” in service.”</p>
                        <div className='pt-4 flex items-center gap-3'>
                            <div>
                                <img src="/img-testimonial-woman-min.webp" alt="" />
                            </div>
                            <div>
                                <h5 className='text-lg font-bold'>Mary Beth Monzingo</h5>
                                <p>Woodward, Pires & Lombardo, P.A.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F6FCFF] w-1/2 pl-16 pt-8 rounded-lg'>
                    <p className='text-xl pt-5'>indicates required fields</p>
                    <p className='text-xl pt-5'>Please note that your information is saved on our server as you enter it.</p>
                    <div className='pt-8'>
                        <label className='font-semibold text-xl' htmlFor="">Name <span className='text-red-600'>*</span></label> <br />
                        <input className='w-11/12 mr-10 py-2 mt-2 border-gray-700 border rounded-lg' type="text" name="name" id="" /> <br /> <br />
                        <label className='font-semibold text-xl' htmlFor="">Firm Name <span className='text-red-600'>*</span></label> <br />
                        <input className='w-11/12 mr-10 py-2 mt-2 border-gray-700 border rounded-lg' type="text" name="name" id="" /> <br /> <br />
                        <label className='font-semibold text-xl' htmlFor="">Email Address <span className='text-red-600'>*</span></label> <br />
                        <input className='w-11/12 mr-10 py-2 mt-2 border-gray-700 border rounded-lg' type="text" name="name" id="" /> <br /> <br />
                        <label className='font-semibold text-xl' htmlFor="">Phone Number <span className='text-red-600'>*</span></label> <br />
                        <input className='w-11/12 mr-10 py-2 mt-2 border-gray-700 border rounded-lg' type="text" name="name" id="" /> <br /> <br />
                        <input className='bg-[#3B65A0] py-2 px-8 mb-10 text-white font-semibold rounded-md' type="submit" value="Let's Go" />

                    </div>
                </div>
            </div>

            <div className='mx-32 flex gap-20 pt-16'>
                <div className='text-white'>
                    <h1 className=' text-8xl'><CiLocationOn /></h1>
                    <h2 className='text-white text-5xl pt-6'>Visit us at</h2>
                    <p>765 E 340 S Suite #105</p>
                    <p>American Fork, UT 84003</p>
                </div>
                <div>
                    <img className='rounded-lg' src="/Location.png" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default contacts;