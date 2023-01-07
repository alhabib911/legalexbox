export const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
export const uploadFile = async (file) => {
  const image = file;
  const formData = new FormData();
  formData.append("image", image);
  const url = `https://api.imgbb.com/1/upload?key=07c290e0d19dbc1732350c230d485ae5`;
  return fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((result) => {
      return result.data.url;
    }).catch((err) => {return err});
};
