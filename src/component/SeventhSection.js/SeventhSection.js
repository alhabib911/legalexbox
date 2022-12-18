import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const SeventhSection = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col justify-between gap-20 lg:mx-28 md:mx-16 mx-8 lg:pt-32 md:pt-16 pt-10'>
                <div className='lg:w-2/6 w-full'>
                    <h1 className='lg:text-[38px] md:text-3xl text-2xl text-white font-semibold'>Over 5,800 Lawyers <br /> Trust Our Services</h1>
                    <div className='grid grid-cols-3 gap-5 pt-8'>
                        <img src="./img-client-tierney-1.png.webp" alt="" />
                        <img src="./img-client-hm.png.webp" alt="" />
                        <img src="./img-client-rsp.png.webp" alt="" />
                        <img src="./img-client-manzoor.png.webp" alt="" />
                        <img src="./img-client-pietragallo.png.webp" alt="" />
                        <img src="./img-client-thomas.png.webp" alt="" />
                    </div>
                </div>
                <div className='lg:w-2/3 w-full flex lg:flex-row md:flex-row flex-col gap-10'>
                    <div className='ourServicesBG lg:w-1/2 md:w-1/2 w-full px-5 py-5 rounded-md mt-24'>
                        <div className='text-[#E6C850] text-[25px] flex'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h3 className='text-xl text-gray-200 font-bold pt-3'>Amazing Company</h3>
                        <p className='text-lg pt-4 text-gray-400'>Law Firm Sites and Jo Stephens are an amazing company! I had a very particular vision for my website and somehow, Jo Stephens and her team were able to capture precisely what I had envisioned.</p>
                        <div className='flex items-center gap-5'>
                            <div>
                                <img class="inline-block h-12 w-12 rounded-full " src="img-client-lourdes.png.webp" alt="img-client-lourdes.png.webp" />
                            </div>
                            <div>
                                <h4 className='text-lg text-gray-200 font-bold pt-3'>Lourdes Ferrer</h4>
                                <p className='text-gray-200'>Ferrer Law Group, LLC</p>
                            </div>
                        </div>
                    </div>
                    <div className='ourServicesBG lg:w-1/2 md:w-1/2 w-full   px-5 py-5 rounded-md'>
                        <div className='text-[#E6C850] text-[25px] flex'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h3 className='text-xl text-gray-200 font-bold pt-3'>Above and Beyond</h3>
                        <p className='text-lg pt-4 text-gray-400'>" I have been in legal marketing for over 10 years and honestly, this is the best website agency I have ever with and is so reasonably priced too. Jo Stephens is tremendous and skillful, and fun . Epitomizes “above and beyond” in service."</p>
                        <div className='flex items-center gap-5'>
                            <div>
                                <img class="inline-block h-12 w-12 rounded-full " src="img-client-lourdes.png.webp" alt="img-testimonial-woman-min.webp" />
                            </div>
                            <div>
                                <h4 className='text-lg text-gray-200 font-bold pt-3'>Mary Beth Monzingo</h4>
                                <p className='text-gray-200'>Woodward, Pires & Lombardo, P.A.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className="bg-[#4E89E1] lg:mt-16 md:mt-8 mt-5 rounded-md px-12 lg:py-3 py-2 text-white font-semibold">
                <Link href={"/testimonial"}>READ MORE TESTIMONIALS</Link>
                    
                </button>
            </div>
        </div>
    );
};

export default SeventhSection;