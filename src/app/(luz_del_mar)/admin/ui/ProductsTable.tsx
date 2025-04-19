import Image from 'next/image';
import Link from 'next/link';
import { getPaginatedProducts } from '@/actions';
import { Pagination } from './Pagination';

interface Props {
  searchParams: {
    page?: string;
  };
}

export const ProductsTable = async ({ searchParams }: Props) => {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProducts({ page });

  return (
    <div className='overflow-x-auto text-teal-600 place-items-center'>
      <Pagination totalPages={totalPages} />
      <table className='table'>
        {/* head */}
        <thead className='text-teal-600'>
          <tr>
            <th>Imagen - Título</th>
            <th>Descripción</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='border-none'>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-12 w-12'>
                      <Image
                        src={product.image}
                        alt='Avatar Tailwind CSS Component'
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold w-full'>{product.title}</div>
                  </div>
                </div>
              </td>
              <td className='w-4/6'>{product.description}</td>
              <td>
                <Link
                  href={`/admin/products/${product.id}`}
                  className='btn bg-teal-600 border-none'>
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
