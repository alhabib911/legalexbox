import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Card from '../component/Card/Card';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const service = () => {
    const blog = [
        {
            id: 1,
            date: "18 Nov, 2022",
            topic: "Family Lawyer Marketing Guide",
            details: "People going through family law issues are in a very tough time. When marketing to people under a lot of stress, it’s important to be sensitive to their needs. You should focus on providing helpful and informative content, rather than trying to hard sell your services. People will be more likely to trust you if they feel like you’re on their side.",
            image: "shutterstock_1033103851.jpg"
        },
        {
            id: 2,
            date: "18 Nov, 2022",
            topic: "Family Lawyer Marketing Guide",
            details: "People going through family law issues are in a very tough time. When marketing to people under a lot of stress, it’s important to be sensitive to their needs. You should focus on providing helpful and informative content, rather than trying to hard sell your services. People will be more likely to trust you if they feel like you’re on their side.",
            image: "shutterstock_1416844700.jpg"
        },
        {
            id: 3,
            date: "18 Nov, 2022",
            topic: "Family Lawyer Marketing Guide",
            details: "People going through family law issues are in a very tough time. When marketing to people under a lot of stress, it’s important to be sensitive to their needs. You should focus on providing helpful and informative content, rather than trying to hard sell your services. People will be more likely to trust you if they feel like you’re on their side.",
            image: "shutterstock_2074291006.jpg"
        },
    ];
    return (
        <div className='bg-[#03142D]'>
            <Navbar />
            <div>
                <h1 className='text-white pt-16 text-center lg:text-6xl md:text-3xl text-2xl '>Law Firm Websites</h1>
                <h3 className='text-white text-center font-semibold lg:text-xl md:text-lg pt-4'>It’s been our only focus since 2001.</h3>
                <div className='lg:flex lg:mx-28 md:mx-16 mx-10 text-lg lg:justify-between gap-5 pt-20'>
                <div className='lg:w-2/4 md:w-4/5 w-full'>
                        <img src="/Untitled-design-min-e1647617353827.png.webp" alt="" />
                    </div>
                    <div className='text-white lg:w-2/5 md:w-full'>
                        <p>Legal website design has been our focus since 2001, and our staff has over two decades of experience developing, designing, and marketing legal websites.</p>
                        <p className='pt-10'>The basis for all law firm websites is a great design, great law firm website designs consist of user experience, first impressions, and responsive design.</p>
                        <p className='pt-10'>Want to see how your website would look designed by our talented team? Send us your information below for a free custom web design for lawyers.</p>
                    </div>
                    
                </div>
                <div>
                    <h1 className='text-center pt-10 lg:text-4xl md:text-2xl text-xl text-white font-semibold'>No Obligation. No Charge. Seriously.</h1>
                    <div className='flex justify-center pt-5'>
                        <h3 className='bg-white lg:px-20 lg:py-3 md:px-20 px-10 md:py-3 py-2 rounded-sm font-semibold text-xl cursor-pointer'>Contact Us</h3>
                    </div>
                </div>
                <div className='lg:mx-28 md:mx-20 mx-10 lg:flex justify-between gap-16 pt-10'>
                    <div className='text-white lg:w-1/3'>
                        <p className='text-6xl'><FaQuoteLeft /></p>
                        <h1>Above and Beyond</h1>
                        <p>“I have been in legal marketing for over 10 years and honestly, this is the best website agency I have ever worked with and is so reasonably priced too. Jo Stephens is tremendous and skillful, and fun to work with on top of it. Epitomizes “above and beyond” in service.”</p>
                        <img className='pt-8' src="/img-testimonial-woman-min.png.webp" alt="" />
                        <h3>Mary Beth Monzingo</h3>
                        <h6>Woodward, Pires & Lombardo, P.A.</h6>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 text-white gap-6'>
                        <div className='bg-[#152841]  text-center rounded-md'>
                            <div className='flex justify-center items-center py-10'>
                                <img src="/icon-chart-hanging-min.png" alt="" />
                            </div>
                            <h3 className='text-xl pt-4'>Award-Winning</h3>
                            <h2 className='text-2xl font-semibold pt-4'>Website Designs</h2>
                            <p className='text-lg'>We develop, design, and market legal websites.</p>
                        </div>
                        <div className='bg-[#152841]  text-center rounded-md'>
                            <div className='flex justify-center items-center py-10'>
                                <img src="/icon-chart-hanging-min.png" alt="" />
                            </div>
                            <h3 className='text-xl pt-4'>Award-Winning</h3>
                            <h2 className='text-2xl font-semibold pt-4'>Website Designs</h2>
                            <p className='text-lg'>We develop, design, and market legal websites.</p>
                        </div>
                        <div className='bg-[#152841]  text-center rounded-md'>
                            <div className='flex justify-center items-center py-10'>
                                <img src="/icon-chart-hanging-min.png" alt="" />
                            </div>
                            <h3 className='text-xl pt-4'>Award-Winning</h3>
                            <h2 className='text-2xl font-semibold pt-4'>Website Designs</h2>
                            <p className='text-lg'>We develop, design, and market legal websites.</p>
                        </div>
                    </div>
                </div>
                <div className='pt-16'>
                    <h1 className='text-center font-semibold lg:text-6xl text-3xl  text-white'>Featured Blog Posts</h1>
                    <p className='text-white text-center pt-5'>Law Firm Sites Blog is designed to give you the info you need and not waste your time.</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-16 lg:mx-28 md:mx-20 mx-10 gap-10'>
                        {blog.map(blog => (
                            <Card blog={blog}></Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default service;