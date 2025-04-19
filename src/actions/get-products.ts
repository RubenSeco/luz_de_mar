"use server";

import prisma from "@/lib/prisma";
import { Category } from "@prisma/client";

export const getProductByCategory = async (category: Category) => {

  const products = await prisma.product.findMany(
    {
      where: {
        category: category
      }
    }
  );

  return products;

};


export const getProductById = async (id: string) => {

  const product = await prisma.product.findFirst(
    {
      where: {
        id: id
      }
    }
  );

  return product;

};

export const getProducts = async () => {

  const products = await prisma.product.findMany();

  return products;


};