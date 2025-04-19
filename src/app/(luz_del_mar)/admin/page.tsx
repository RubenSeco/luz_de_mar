// 'use client';

import { ProductsTable } from './ui/ProductsTable';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  return (
    <div className='flex flex-1 w-full place-content-center'>
      <ProductsTable searchParams={searchParams} />
    </div>
  );
}
