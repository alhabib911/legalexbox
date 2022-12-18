import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const testimonial = () => {
     
    return (
        <div className='bg-[#03142D]'>
        <Navbar />
        <h1 className='lg:text-4xl text-2xl text-center font-bold text-white pt-5'>Our Amazing Clients</h1>
      
        <Footer/>
    </div>
    );
};

export default testimonial;