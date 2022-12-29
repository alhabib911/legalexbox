import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../component/Layout/Layout';

const review = () => {
    const [showModal, setShowModal] = useState(false);
    const {handleSubmit, register, formState: {errors, isValid}, watch} = useForm({mode: "all"})
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
    const onSubmit = (data) =>{
        console.log("data", data);
    }
    return (
        <Layout>
            <div className='px-5'>
                <button className='bg-[#3B65A0] lg:py-2 mt-4 md:py-2 py-1 px-8 mb-10 cursor-pointer text-white font-semibold rounded-md block'
                    onClick={() => setShowModal(true)}
                >Add Review</button>
            </div>
            <>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Add new review
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}

                                    <div className="relative p-6 flex-auto">
                                        <div className="w-full max-w-lg">
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-name">
                                                        Company Name <span className='text-red-600'>*</span>
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-name" type="text" placeholder="Company name" {...register("company-name", {required: true})}/>
                                                </div>
                                                <div className="w-full px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="review-details">
                                                        Review Details <span className='text-red-600'>*</span>
                                                    </label>
                                                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="review-details" type="text" placeholder="Enter review details" {...register("review-details", {required: true})}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                            // onClick={() => setShowModal(false)}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                </form>
                                
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>
        </Layout>
    );
};

export default review;