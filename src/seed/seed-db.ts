import prisma from "../lib/prisma";
import { initialData } from "./seed";


async function main() {


  await prisma.product.deleteMany();

  const { products } = initialData;

  await prisma.product.createMany({
    data: products.map(product => ({
      ...product,
      isSet: product.isSet ?? false
    }))
  });

  console.log("Seed ejecutado correctamente");

}


(() => { main(); })();