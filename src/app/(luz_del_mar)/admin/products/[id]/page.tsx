import { getProductById } from '@/actions';
import { EditProductForm } from '../../ui';

interface Props {
  params: {
    id: string;
  };
}

export default async function EditProductPage({ params }: Props) {
  const { id } = params;

  const product = await getProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='text-teal-600'>
      <EditProductForm product={product} />
    </div>
  );
}
