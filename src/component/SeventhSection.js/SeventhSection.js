import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import OverlayLoading from "../common/OverlayLoading";
const SeventhSection = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const { data } = await axios.get(
        `https://${window.location.host}/api/reviews`
      );
      if (data.status === 200) {
        setData(data.data);
        setLoading(false);
      }
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) {
    return <OverlayLoading />;
  }
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between gap-20 lg:mx-28 md:mx-16 mx-8 lg:pt-32 md:pt-16 pt-10">
        <div className="lg:w-2/6 w-full">
          <h1 className="lg:text-[38px] md:text-3xl text-2xl text-white font-semibold">
            Over 5,800 Lawyers <br /> Trust Our Services
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-8">
            <img src="./img-client-tierney-1.png.webp" alt="" />
            <img src="./img-client-hm.png.webp" alt="" />
            <img src="./img-client-rsp.png.webp" alt="" />
            <img src="./img-client-manzoor.png.webp" alt="" />
            <img src="./img-client-pietragallo.png.webp" alt="" />
            <img src="./img-client-thomas.png.webp" alt="" />
          </div>
        </div>
        <div className="lg:w-2/3 w-full flex lg:flex-row md:flex-row flex-col gap-10">
          {data?.map((item, i) => (
            <div
              key={i}
              className="ourServicesBG lg:w-1/2 md:w-1/2 w-full px-5 py-5 rounded-md mt-24"
            >
              <div className="text-[#E6C850] text-[25px] flex">
                {Array.from({ length: item.rating }).map((rating, i) => (
                  <AiFillStar key={i}/>
                ))}
              </div>
              <h3 className="text-xl text-gray-200 font-bold pt-3">
                {item?.company_name}
              </h3>
              <p className="text-lg pt-4 text-gray-400">
                {item?.review_details}
              </p>
              <div className="flex items-center gap-5 mt-3">
                <div>
                  <h4 className="text-lg text-gray-200 font-bold pt-3">
                    {item?.author}
                  </h4>
                  <p className="text-gray-200">{item?.designation_address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#4E89E1] lg:mt-16 md:mt-8 mt-5 rounded-md px-12 lg:py-3 py-2 text-white font-semibold">
          <Link href={"/testimonial"}>READ MORE TESTIMONIALS</Link>
        </button>
      </div>
    </div>
  );
};

export default SeventhSection;
