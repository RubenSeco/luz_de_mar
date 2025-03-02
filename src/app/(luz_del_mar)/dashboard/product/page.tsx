'use client';

import { ProductForm } from './ui/ProductForm';

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <div className='flex flex-col min-h-screen'>
      <ProductForm />
    </div>
  );
}
