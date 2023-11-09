export interface ImageUpload {
  public_id: string;
  url: string;
}

export const imageUploade = async (images: any): Promise<ImageUpload[]> => {
  let newImages = [];

  for (let img of images) {
    const formData = new FormData();

    formData.append("file", img);
    formData.append("clound_name", "daggokgzh");
    formData.append("upload_preset", "yj0kduve");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/daggokgzh/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    console.log(data);

    newImages.push({
      public_id: data.public_id,
      url: data.secure_url,
    });
  }

  return newImages;
};
