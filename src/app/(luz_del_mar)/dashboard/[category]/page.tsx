import { getProductByCategory } from '@/actions/get-products';
import { Category } from '@prisma/client';
import { ProductSlideShow } from '../ui';

interface Props {
  params: {
    category: Category;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = params;

  const productsByCategory = await getProductByCategory(category);

  return (
    <div className='mb-10'>
      <ProductSlideShow products={productsByCategory} />
    </div>
  );
}
