import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';
import TestimonialAddedCard from '../component/TestimonialAddedCard';

const testimonial = () => {
    const testimonialAdded = [
        {
            id: 1,
            CompanyName: "Amazing Company",
            details: "People going through family law issues are in a very tough time. When marketing to people under a lot of stress, it’s important to be sensitive to their needs. You should focus on providing helpful and informative content, rather than trying to hard sell your services. People will be more likely to trust you if they feel like you’re on their side.",
            image: "shutterstock_1033103851.jpg",
            Author: "Lourdes Ferrer",
            Position: "Ferrer Law Group, LLC"
        },
        {
            id: 2,
            CompanyName: "Amazing Company",
            details: "People going through family law issues are in a very tough time. When marketing to people under a lot of stress, it’s important to be sensitive to their needs. You should focus on providing helpful and informative content, rather than trying to hard sell your services. People will be more likely to trust you if they feel like you’re on their side.",
            image: "shutterstock_1416844700.jpg",
            Author: "Lourdes Ferrer",
            Position: "Ferrer Law Group, LLC"
        },
        {
            id: 3,
            CompanyName: "Amazing Company",
            details: "People going through family law issues are in a very tough time. When marketing to people under a lot of stress, it’s important to be sensitive to their needs. You should focus on providing helpful and informative content, rather than trying to hard sell your services. People will be more likely to trust you if they feel like you’re on their side.",
            image: "shutterstock_2074291006.jpg",
            Author: "Lourdes Ferrer",
            Position: "Ferrer Law Group, LLC"
        },
    ];
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false)
    useEffect(() => {
        async function fetch() {
          setLoading(true);
          const { data } = await axios.get(
            `http://${window.location.host}/api/reviews`
          );
          if (data.status === 200) {
            setData(data.data);
            setLoading(false);
          }
          setLoading(false);
        }
        fetch();
      }, []);

    return (
        <div className='bg-[#03142D]'>
            <Navbar />
            <h1 className='lg:text-4xl text-2xl text-center font-bold text-white pt-5'>Our Amazing Clients</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-16 lg:mx-28 md:mx-20 mx-10 gap-10'>
                {data?.length > 0 && data.map((testimonialAdded, i) => (
                    <TestimonialAddedCard testimonial={testimonialAdded} key={i}/>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default testimonial;