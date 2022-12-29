import axios from "axios";

export const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
// export const uploadFile = async (file) => {
//   const bufferToBase64 = (buffer) =>
//   new Promise((resolve) => {
//     const buff = new Buffer(buffer);
//     const base64string = buff.toString("base64"); // https://nodejs.org/api/buffer.html#buftostringencoding-start-end
//     return setTimeout(() => {
//       resolve(base64string);
//     }, 1000);
//   });
//   const newData = {
//     key: process.env.imageBB,
//     image: await bufferToBase64(file),
//     name: "Test",
//   };
//   const config = {
//     headers:{
//       "Access-Control-Allow-Headers": "*",
//     }
//   };

//   let { data } = await axios.post(`https://api.imgbb.com/1/upload`,newData, config);
//   console.log('result', data)
  
// };
