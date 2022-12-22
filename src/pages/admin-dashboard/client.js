import React from 'react';
import Layout from '../../component/Layout/Layout';

const client = () => {
    const handleAddMyTeam = (e) => {
        e.preventDefault();
        const Name = e.target.Name.value;
        const Designation = e.target.Designation.value;


        const AddMyTeam = {
            Name,
            Designation,
        };
        console.log(AddMyTeam);
        // fetch(
        //     "http://localhost:3000/",
        //     {
        //         method: "POST",
        //         headers: {
        //             "content-type": "application/json",
        //         },
        //         body: JSON.stringify(AddMyTeam),
        //     }
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         if (data) {
        //             e.target.reset();
        //         }
        //     });
    };
    return (
        <Layout>
            <p>Client.........</p>
            <div className='bg-[#F6FCFF] lg:w-full lg:pl-16 md:pl-10 pl-5 pt-8 rounded-lg'>
            <form onSubmit={handleAddMyTeam} className='pt-8'>
                <label className='font-semibold lg:text-xl md:text-xl text-lg' htmlFor="">Name <span className='text-red-600'>*</span></label> <br />
                <input className='w-1/4 pl-2 mr-10 lg:py-2 md:py-2 py-1 mt-2 border-gray-700 border rounded-lg' type="text" name="Name" id="" /> <br /> <br />
                <label className='font-semibold lg:text-xl md:text-xl text-lg' htmlFor="">Designation <span className='text-red-600'>*</span></label> <br />
                <input className='w-1/4 pl-2 mr-10 lg:py-2 md:py-2 py-1 mt-2 border-gray-700 border rounded-lg' type="text" name="Designation" id="" /> <br /> <br />
                {/* <label className='font-semibold lg:text-xl md:text-xl text-lg' htmlFor="">Add Photo <span className='text-red-600'>*</span></label> <br />
                <input className='w-1/4 pl-2 mr-10 lg:py-2 md:py-2 py-1 mt-2 border-gray-700 border rounded-lg' type="file" name="" id="" /> <br /> */}
                <input className='bg-[#3B65A0] lg:py-2 mt-4 md:py-2 py-1 px-8 mb-10 cursor-pointer text-white font-semibold rounded-md' type="submit" value="Save Change" />
            </form>
        </div>
        </Layout>
    );
};

export default client;