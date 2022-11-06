import React from 'react';

const FourthSection = () => {
    return (
        <div className='lg:pt-28 pt-16'>
            <h1 className='lg:text-4xl md:text-2xl text-xl text-white text-center'>What Makes Us Different</h1>
            <h1 className='lg:text-4xl md:text-2xl text-xl text-white text-center'>From Everyone Else?</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-28 md:mx-16 mx-8  lg:pt-16 md:pt-8 pt-5'>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Niche Experience.</h3>
                    <p className='pt-3 text-gray-400'>Established in 2001, Law Firm Sites has only worked with lawyers. We understand the unique needs of the legal industry in design and marketing.</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Guaranteed Results.</h3>
                    <p className='pt-3 text-gray-400'>For our marketing clients, we guarantee that you will get results.</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Full Website Control.</h3>
                    <p className='pt-3 text-gray-400'>Want to switch to another company after we've built your site? You can take your website with you--your website is fully yours.</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Unlimited Design Revisions.</h3>
                    <p className='pt-3 text-gray-400'>We will continue to make design edits until you're completely satisfied.</p>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;