import { getProducts } from '@/app/actions/get-products';
import CategoryCard from '@/app/ui/CategoryCard';
import { Category, Product } from '@prisma/client';

export default async function NamePage() {
  const products = await getProducts();
  const oneProductByCategory: Product[] = [];

  const categoryValues = Object.values(Category);

  for (let i = 0; i < categoryValues.length; i++) {
    products.find((product) => {
      if (product.category === categoryValues[i]) {
        oneProductByCategory.push(product);
        i++;
      }
      return;
    });
  }

  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-36'>
      {
        oneProductByCategory.map((product) => (

      <CategoryCard key={product.id} product={product} />

        ))
      }
    </div>
  );
}
