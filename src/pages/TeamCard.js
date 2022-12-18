import React from 'react';

const TeamCard = (props) => {
    const {id, image, name, designation} = props.teamadd
    return (
        <div className='bg-[#0E1F33] rounded-md'>
            <h3 className='lg:text-2xl md:text-2xl text-xl font-semibold text-white text-center pt-2'>{name}</h3>
            <p className='text-lg text-center text-blue-700'>{designation}</p>
            <img className='w-[300px]' src={image} alt="" />
        </div>
    );
};

export default TeamCard;