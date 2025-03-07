
"use server";

import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

export const createProduct = async (formdata: FormData) => {

  const product = Object.fromEntries(formdata);

  // product.slug = product.title.toString().toLowerCase().replace(/ /g, "-").trim();

  const imagetoSave = product.image.toString().replace("C:\\fakepath\\", "D:/PROYECTOS/luz-del-mar/public/images/");
  const imageUploaded = await uploadImage(imagetoSave);
  const imageName = imageUploaded?.split("/").pop()?.split(".")[0];


  if (imageUploaded) {
    product.image = imageUploaded;
  } else {
    throw new Error("Image upload failed");
  }

  try {

    await prisma.$transaction(async (tx) => {

      const newProduct = await tx.product.create({
        data: {
          ...product
        }
      });

      return newProduct;

    });



  } catch (error) {
    if (error.code === 'P2002') {

      return { error: 'Product already exists' };

    }
    if (imageName) {
      await cloudinary.uploader.destroy(imageName);
    }
    return { error: error.message };
  }

};


const uploadImage = async (image: string) => {

  try {

    return cloudinary.uploader.upload(image, {
      transformation: [
        {
          quality: "auto"
        },
        {
          fetch_format: "auto"
        },
        {
          widht: 1200,
          height: 1200
        }
      ]
    }).then((resp) => resp.secure_url);

  } catch (error) {
    console.log(error);
    return null;

  }

};