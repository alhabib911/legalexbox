import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import OverlayLoading from "../../component/common/OverlayLoading";
import Layout from "../../component/Layout/Layout";
import Table from "../../component/table/Table";

const contactList = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const { data } = await axios.get(
        `https://${window.location.host}/api/contact-list`
      );
      if (data.status === 200) {
        setData(data.data);
        setLoading(false);
      }
    }
    setLoading(false);
    fetch();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Firm Name",
        accessor: "firmName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ],
    []
  );

  return (
    <Layout>
      <p className="text-center text-gray-800 text-2xl font-bold pt-2 underline">
        Contact List
      </p>
      <div>
        {loading ? (
          <OverlayLoading />
        ) : (
          <Table columns={columns} data={data} loading={loading} />
        )}
      </div>
    </Layout>
  );
};

export default contactList;
