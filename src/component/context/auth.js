import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { fbAuth } from "./config";

  export const createUserWithEmail = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(fbAuth, email, password);
      if (res?.user) {
        return res;
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        title: errorCode || "Something went wrong",
        icon: "error",
        timer: 2000,
        showConfirmButton: true,
        confirmButtonText: "Okay",
      })
      // throw new Error(`${errorCode} ${errorMessage}`);
    }
  };

  export const loginWithEmail = async (email, password, setProcessing) => {
    try {
      const res = await signInWithEmailAndPassword(fbAuth, email, password);
      if (res?.user) {
        setProcessing(false);
        return res.user;
      }
    } catch (err) {
      setProcessing(false);
      Swal.fire({
        title: err.code || "Something went wrong",
        icon: "error",
        timer: 2000,
        showConfirmButton: true,
        confirmButtonText: "Okay",
      })
    }
  };