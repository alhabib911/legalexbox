import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  fileToDataUri,
  uploadFile,
} from "../../component/common/ImageProccess";
import Layout from "../../component/Layout/Layout";

const myTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
    reset
  } = useForm({ mode: "all" });
  const [profileURL, setProfileURL] = useState("");
  const [profileFile, setProfileFile] = useState("");
  const handleUploadProfileChange = (file) => {
    if (!file) {
      setProfileURL("");
      //   setBtnTrue(false);
      return;
    }
    setProfileFile(file);
    fileToDataUri(file).then((profileURL) => {
      setProfileURL(profileURL);
      // uploadFile(profileURL);
      //   setBtnTrue(true);
    });
  };
  const onSubmit = async (value) => {
    //  await handler(data)
    const { data } = await axios.get("http://localhost:3003/api/teams");
    console.log('data', data)
    reset()
    
  };
  return (
    <Layout>
      <div className="px-5">
        <button
          className="bg-[#3B65A0] lg:py-2 mt-4 md:py-2 py-1 px-8 mb-10 cursor-pointer text-white font-semibold rounded-md block"
          onClick={() => setShowModal(true)}
        >
          Add Team
        </button>
      </div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Add new team member
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
                          <div className="w-full md:w-1/2 px-3 mx-auto">
                            <img
                              className="object-cover w-[7rem] h-[7rem] mx-2 rounded-full"
                              src={profileURL}
                              alt="profile"
                            />
                            <label
                              htmlFor="pic"
                              className="w-[9rem] relative pl-7 cursor-pointer appearance-none block text-gray-700 dark:text-white border border-gray-200 dark:border-black dark:focus:border-black py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm text-grey-500 file:hidden file:placeholder:Select Banner Image file:rounded-full hover:file:cursor-pointer rounded-md shadow-sm my-2 bg-gray-400 dark:bg-black "
                            >
                              <div className="absolute inset-y-0 left-0 pl-2 flex items-center ">
                                <span className="sm:text-sm cursor-pointer text-black ">
                                  {/* <FontAwesomeIcon icon={faCamera} /> */}
                                  {"Select new image"}
                                </span>
                              </div>
                            </label>

                            <input
                              accept=".jpg, .png, .jpeg"
                              type="file"
                              id="pic"
                              className=" hidden"
                              onChange={(event) =>
                                handleUploadProfileChange(
                                  event.target.files[0] || null
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="first-name"
                            >
                              First Name <span className="text-red-600">*</span>
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="first-name"
                              type="text"
                              placeholder="Jane"
                              {...register("first-name", { required: true })}
                            />
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="last-name"
                            >
                              Last Name <span className="text-red-600">*</span>
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="last-name"
                              type="text"
                              placeholder="Doe"
                              {...register("last-name", { required: true })}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Email <span className="text-red-600">*</span>
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="email"
                              type="email"
                              placeholder="example@gmail.com"
                              {...register("email", { required: true })}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="designation"
                            >
                              Designation{" "}
                              <span className="text-red-600">*</span>
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="designation"
                              type="text"
                              placeholder="Enter designation"
                              {...register("designation", { required: true })}
                            />
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

export default myTeam;
