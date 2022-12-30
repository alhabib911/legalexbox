import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import OverlayLoading from "../component/common/OverlayLoading";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";

const contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const {handleSubmit, register, formState: {errors, isValid}, watch, reset} = useForm({mode: "all"})

  const onSubmit = async (value) =>{
    setLoading(true);
    const { data } = await axios.post(
      `http://${window.location.host}/api/contact-list`,
      value
    );
    if (data.status === 200) {
      Swal.fire({
        title: "Successfully Added contact.",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1000,
      });
      setLoading(false);
    } else {
      Swal.fire({
        text: `"Something went wrong! Please try again later.`,
        icon: "warning",
        confirmButtonColor: "#006EB8",
        confirmButtonText: `Ok`,
        allowOutsideClick: false,
      });
      setLoading(false);
    }
    reset();
    setShowModal(false);
  }

  if (loading) {
    return <OverlayLoading />;
  }
  return (
    <div className="bg-[#03142D]">
      <Navbar />
      <div className="lg:flex justify-between lg:mx-32 md:mx-20 mx-10 pt-10">
        <div className="text-white lg:w-1/2 w-full">
          <h1 className="lg:text-5xl text-3xl font-semibold">
            Get a Better Site.
          </h1>
          <h1 className="lg:text-5xl text-3xl text-[#98DBF9] font-bold">
            Get Better Cases.
          </h1>
          <h6 className="text-2xl pt-5">This is going to be good.</h6>
          <div className="my-10 lg:w-4/5 w-full bg-[#152841] lg:px-16 px-6 py-8 rounded-lg">
            <div className="flex lg:items-center items-end lg:text-3xl text-2xl gap-4 font-semibold">
              <h1 className="text-[#98DBF9]">
                <FaQuoteLeft />
              </h1>
              <h2>Above and Beyond</h2>
            </div>
            <p className="text-lg">
              ” I have been in legal marketing for over 10 years and honestly,
              this is the best website agency I have ever worked with and is so
              reasonably priced too. Jo Stephens is tremendous and skillful, and
              fun to work with on top of it. Epitomizes “above and beyond” in
              service.”
            </p>
            <div className="pt-4 flex items-center gap-3">
              <div>
                <img src="/img-testimonial-woman-min.webp" alt="" />
              </div>
              <div>
                <h5 className="text-lg font-bold">Mary Beth Monzingo</h5>
                <p>Woodward, Pires & Lombardo, P.A.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6FCFF] lg:w-1/2 lg:pl-16 md:pl-10 pl-5 pt-8 rounded-lg">
          <p className="text-xl pt-5">indicates required fields</p>
          <p className="text-xl pt-5">
            Please note that your information is saved on our server as you
            enter it.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="pt-8">
            <label
              className="font-semibold lg:text-xl md:text-xl text-lg"
              htmlFor="name"
            >
              Name <span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              className="w-11/12 pl-2 mr-10 lg:py-2 md:py-2 py-1 mt-2 border-gray-700 border rounded-lg"
              type="text"
              name="name"
              {...register("name", { required: true })}
            />{" "}
            <br /> <br />
            <label
              className="font-semibold lg:text-xl md:text-xl text-lg"
              htmlFor="firmName"
            >
              Firm Name <span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              className="w-11/12 pl-2 mr-10 lg:py-2 md:py-2 py-1 mt-2 border-gray-700 border rounded-lg"
              type="text"
              name="firmName"
              {...register("firmName", { required: true })}
            />{" "}
            <br /> <br />
            <label
              className="font-semibold lg:text-xl md:text-xl text-lg"
              htmlFor="email"
            >
              Email Address <span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              className="w-11/12 pl-2 mr-10 lg:py-2 md:py-2 py-1 mt-2 border-gray-700 border rounded-lg"
              type="text"
              name="email"
              {...register("email", { required: true })}
            />{" "}
            <br /> <br />
            <label
              className="font-semibold lg:text-xl md:text-xl text-lg"
              htmlFor="phone"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              className="w-11/12 pl-2 mr-10 lg:py-2 md:py-2 py-1 mt-2 border-gray-700 border rounded-lg"
              type="text"
              name="phone"
              {...register("phone", { required: true })}
            />{" "}
            <br /> <br />
            <input
              className="bg-[#3B65A0] lg:py-2 md:py-2 py-1 px-8 mb-10 cursor-pointer text-white font-semibold rounded-md"
              type="submit"
              value="Let's Go"
            />
          </form>
        </div>
      </div>

      <div className="mx-32 lg:flex gap-20 pt-16">
        <div className="text-white whitespace-nowrap">
          <h1 className=" lg:text-5xl md:text-5xl text-5xl">
            <CiLocationOn />
          </h1>
          <h2 className="text-white lg:text-5xl md:text-3xl text-xl lg:pt-6">
            Visit us at
          </h2>
          <p>765 E 340 S Suite #105</p>
          <p>American Fork, UT 84003</p>
        </div>
        <div>
          <img
            className="rounded-lg lg:visible hidden"
            src="/Location.png"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contacts;
