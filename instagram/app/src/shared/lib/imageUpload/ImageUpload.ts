export interface ImageUpload {
  public_id: string;
  url: string;
}

export const ImageUpload = async (images: any): Promise<ImageUpload[]> => {
  let newImages = [];

  for (const img of images) {
    const formData = new FormData();

    if (img.camera) {
      formData.append("file", img.camera);
    } else {
      formData.append("file", img);
    }

    formData.append("cloud_name", "daggokgzh");
    formData.append("upload_preset", "sbmluzj6");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/daggokgzh/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    newImages.push({
      public_id: data.public_id,
      url: data.secure_url,
    });
  }
  return newImages;
};
