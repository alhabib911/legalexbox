import React from 'react';

const Card = (props) => {
    const { id, date, topic, details, image } = props.blog
    return (
        <div>
            <img className='w-[350px] rounded-lg' src={image} alt="" />
            <p className='text-teal-400 text-lg pt-2'>{date}</p>
            <h2 className='font-semibold lg:text-3xl md:text-xl text-teal-300 pt-2'>{topic}</h2>
            <p className='text-white pt-2'>{details.slice(0, 80)}...</p>
        </div>
    );
};

export default Card;