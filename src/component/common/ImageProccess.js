import axios from "axios";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
export const uploadFile = async (file) => {
  const bufferToBase64 = (buffer) =>
  new Promise((resolve) => {
    const buff = new Buffer(buffer);
    const base64string = buff.toString("base64"); // https://nodejs.org/api/buffer.html#buftostringencoding-start-end
    return setTimeout(() => {
      resolve(base64string);
    }, 1000);
  });
  const newData = {
    key: process.env.imageBB,
    image: "https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg",
    name: "Test",
  };
  const config = {
    headers:{
      "Access-Control-Allow-Headers": "*",
    }
  };

  let { data } = await axios.post(`https://api.imgbb.com/1/upload`,newData, config);
  console.log('result', data)
  
};



export async function SingleFileUpload(image, referance, fileName) {
  const storage = getStorage();
const cloudStorageRef = ref(storage);
  const imageRef = ref(cloudStorageRef, referance);
  const storageRef = ref(imageRef, fileName);
  try {
    await uploadBytesResumable(storageRef, image);
    const get_url = await getDownloadURL(storageRef);
    if (get_url) {
      console.log('get_url', get_url);
      
      return get_url;
    }
  } catch (error) {
    return false;
  }
}

