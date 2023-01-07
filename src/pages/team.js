import React, { useEffect, useState } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import TeamCard from "../component/TeamCard";
import OverlayLoading from "../component/common/OverlayLoading";
import axios from "axios";

const team = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const { data } = await axios.get(
        `http://${window.location.host}/api/teams`
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
    <div className="bg-[#03142D]">
      <Navbar />
      <div className="pt-10">
        <h1 className="lg:text-5xl md:text-3xl text-xl text-center text-white font-semibold">
          Meet Our Team
        </h1>
        <h3 className="lg:text-3xl md:text-2xl text-lg text-center text-white pt-2">
          It’s our job to make you look great.
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-16 lg:mx-28 md:mx-20 mx-10 gap-10">
          {data?.length > 0 &&
            data?.map((teamadd, i) => <TeamCard team={teamadd} key={i} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default team;
