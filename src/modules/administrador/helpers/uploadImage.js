const uploadImage = async (file) => {
  if (!file) {
    return;
  }
  try {
    const formData = new FormData();
    formData.append("upload_preset", "escuela");
    formData.append("file", file);
    const url = "https://api.cloudinary.com/v1_1/javier-heraud/image/upload";
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const body = await res.json();
    console.log(body);
    return body.secure_url;
  } catch (error) {
    console.error("Error al cargar la imagen, revisar logs");
    console.log(error);
    return null;
  }
};
export default uploadImage;
