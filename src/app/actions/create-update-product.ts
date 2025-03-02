
"use server";

import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

export const createUpdateProduct = async (formdata: FormData) => {

  const product = Object.fromEntries(formdata);

  // product.slug = product.title.toString().toLowerCase().replace(/ /g, "-").trim();


  try {

    await prisma.$transaction(async (tx) => {

      const imagetoSave = product.image.toString().replace("C:\\fakepath\\", "D:/PROYECTOS/luz-del-mar/public/images/");

      const imageUploaded = await uploadImage(imagetoSave);

      if (imageUploaded) {
        product.image = imageUploaded;
      } else {
        throw new Error("Image upload failed");
      }

      const newProduct = await tx.product.create({
        data: {
          ...product
        }
      });

      return { product: newProduct };
    });

  } catch (error) {
    if (error.code === 'P2002') {
      return { error: 'Product already exists' };

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