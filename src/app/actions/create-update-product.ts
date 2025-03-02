
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createUpdateProduct = async (formdata: FormData) => {

  const product = Object.fromEntries(formdata);

  product.slug = product.title.toString().toLowerCase().replace(/ /g, "-").trim();


  try {

    await prisma.$transaction(async (tx) => {


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

}

