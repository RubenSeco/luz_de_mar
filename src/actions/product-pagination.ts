"use server";


interface PaginationOption {

  page?: number;
  take?: number;

}

export const getPaginatedProducts = async ({ page = 1, take = 8 }: PaginationOption) => {

  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {

    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take
    });

    const totalItems = await prisma.product.count();
    const totalPages = Math.ceil(totalItems / take);
    return {
      products,
      totalPages,
      currentPage: page
    };

  } catch (err) {
    throw new Error("No se pudieron cargar los productos");

  };


};