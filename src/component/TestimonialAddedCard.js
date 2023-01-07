import React from 'react';

const TestimonialAddedCard = ({testimonial}) => {
    const{id, company_name, designation_address, rating, author, review_details}=testimonial

    return (
        <div className='bg-[#0C1127] px-6 py-3 text-white rounded-md'>
            <h3 className='text-2xl font-semibold pb-2'>{company_name}</h3>
            <p>{review_details}</p>
            <div>
                {/* <div className='py-2'>
                    <img className='w-[60px] h-[60px] rounded-full' src={image} alt="" />
                </div> */}
                <div className='mt-3'>
                    <h4 className='text-xl'>{author}</h4>
                    <h4>{designation_address}</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialAddedCard;