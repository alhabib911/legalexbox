import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';
import TeamCard from './teamCard';

const team = () => {
    const teamadd = [
        {
            id: 1,
            name: "Jo Stephens",
            designation: "CEO & President",
            image: "Team/min.webp"
        },
        {
            id: 2,
            name: "Dirk Stephens",
            designation: "Vice President",
            image: "Team/lmin.webp"
        },
        {
            id: 3,
            name: "Jo Stephens",
            designation: "CEO & President",
            image: "Team/kmin.webp"
        },
    ];
    return (
        <div className='bg-[#03142D]'>
            <Navbar />
            <div className='pt-10'>
                <h1 className='lg:text-5xl md:text-3xl text-xl text-center text-white font-semibold'>Meet Our Team</h1>
                <h3 className='lg:text-3xl md:text-2xl text-lg text-center text-white pt-2'>It’s our job to make you look great.</h3>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-16 lg:mx-28 md:mx-20 mx-10 gap-10'>
                        {teamadd.map(teamadd => (
                            <TeamCard teamadd={teamadd}></TeamCard>
                        ))}
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default team;