
"use server";

import prisma from "@/lib/prisma";
import { Category, Product } from "@prisma/client";

import { v2 as cloudinary } from "cloudinary";
import { z } from "zod";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const formSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.'
  }),
  category: z.nativeEnum(Category).default(Category.necklace),
  image: z.string().url({ message: 'Image must be a valid URL.' }),
  description: z
    .string()
    .min(2, { message: 'Description must be at least 2 characters.' })
    .max(255)
    .default(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci nisi culpa iusto saepe quidem.`),
  isSet: z.coerce.boolean(),
});



export const createUpdateProduct = async (formdata: FormData) => {


  const formData = Object.fromEntries(formdata);

  const productParsed = formSchema.safeParse(formData);


  // Mejorar el mensaje de error si falla en productParsed
  if (!productParsed) {
    throw new Error("Form data is required");
  }

  const product = productParsed.data;

  const { id, image, ...rest } = product;

  const slug = rest.title.toString().toLowerCase().replace(/ /g, "-").trim();


  try {

    await prisma.$transaction(async (tx) => {

      let product: Product;

      if (id) {
        product = await tx.product.update({

          where: { id },
          data: {
            ...rest,
            slug: slug
          }
        });

      } else {
        const imageToSave = await uploadImage(image);
        product = await tx.product.create({
          data: {
            ...rest,
            image: imageToSave ?? "",
            slug: slug
          }
        });
      }

      return {
        ok: true,
        product
      };

    });

  } catch (error) {
    if (error.code === 'P2002') {

      return { error: 'Product already exists' };

    }
    if (image) {
      await cloudinary.uploader.destroy(image);
    }
    return { error: error.message };
  }

};


const uploadImage = async (image: string) => {


  const imagetoSave = image.toString().replace("C:\\fakepath\\", "D:/PROYECTOS/luz-del-mar/public/images/");
  const imageName = imagetoSave?.split("/").pop()?.split(".")[0];

  try {

    return cloudinary.uploader.upload(imageName!, {
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