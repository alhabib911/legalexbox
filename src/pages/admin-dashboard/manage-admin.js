import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import OverlayLoading from "../../component/common/OverlayLoading";
import { createUserWithEmail } from "../../component/context/auth";
import Layout from "../../component/Layout/Layout";
import Table from "../../component/table/Table";

const AdminList = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({ mode: "all" });

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const { data } = await axios.get(
        `http://${window.location.host}/api/admins`
      );
      if (data.status === 200) {
        setData(data.data);
        setLoading(false);
      }
    }
    setLoading(false);
    fetch();
  }, [reload]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Created",
        accessor: "#",
        Cell: ({ row }) => {
          return (
            <div>
              {new Date(
                Number(row.original.created || Date.now())
              ).toLocaleString()}
            </div>
          );
        },
      },
      {
        Header: "Action",
        accessor: "#a",
        Cell: ({ row }) => {
          return (
            <div>
              <button
                onClick={() => handleDelete(row.original.email)}
                type="button"
                className="btn btn-primary bg-[#fe1e35] px-2 rounded-md text-white"
              >
                Deleted Admin
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  const handleDelete = async (email) => {
    let r = confirm("Are you sure delete this admin.");
    if (!r) {
      return;
    }
    setLoading(true);
    const { data } = await axios.delete(
      `http://${window.location.host}/api/admins`,
      { data: email }
    );
    if (data.status === 200) {
      setReload(Date.now());
    } else {
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
        timer: 2000,
        showConfirmButton: true,
        confirmButtonText: "Okay",
      });
    }
    setLoading(true);
  };
  const onSubmit = async (data) => {
    setShowModal(false);
    setLoading(true);
    const user = await createUserWithEmail(data.email, data.password);
    if (user) {
      const userData = {
        email: user?.user?.email,
        role: "admin",
        created: user?.user?.metadata?.createdAt,
      };
      await axios.post(`http://${window.location.host}/api/admins`, {
        ...userData,
      });
      setLoading(false);
      setReload(Date.now());
      Swal.fire({
        title: "Successfully created admin.",
        icon: "success",
        timer: 2000,
        showConfirmButton: true,
        confirmButtonText: "Okay",
      });
    } else {
      setLoading(false);
      return false;
    }
  };

  return (
    <Layout>
      <div className="px-2">
        <button
          className="bg-[#3B65A0] lg:py-2 mt-4 md:py-2 py-1 px-8 mb-2 cursor-pointer text-white font-semibold rounded-md block"
          onClick={() => setShowModal(true)}
        >
          Create Admin
        </button>
        {loading ? (
          <OverlayLoading />
        ) : (
          <Table columns={columns} data={data} loading={loading} />
        )}
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
                      <h3 className="text-3xl font-semibold">Add new review</h3>
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
                              placeholder="Email Name"
                              {...register("email", { required: true })}
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="password"
                            >
                              Password <span className="text-red-600">*</span>
                            </label>
                            <textarea
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="password"
                              type="text"
                              placeholder="Enter password"
                              {...register("password", {
                                required: true,
                              })}
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

export default AdminList;
