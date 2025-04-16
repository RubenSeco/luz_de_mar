"use server";

import prisma from "@/lib/prisma";
import { Category } from "@prisma/client";

export const getProductBySlug = async (slug: Category) => {

  const products = await prisma.product.findMany(
    {
      where: {
        category: slug
      }
    }
  );

  return products;

};

export const getProducts = async () => {

  const products = await prisma.product.findMany();

  return products;


};