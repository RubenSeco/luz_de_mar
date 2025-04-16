import { getProductBySlug } from '@/app/actions/get-products';
import ProductSlideShow from '@/app/ui/ProductSlideShow';
import { Category } from '@prisma/client';

interface Props {
  params: {
    slug: Category;
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = params;

  const productsByCategory = await getProductBySlug(slug);

  return (
    <div className='mb-10'>
      <ProductSlideShow products={productsByCategory} />
    </div>
  );
}
