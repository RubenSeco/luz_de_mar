'use client';

import { createUpdateProduct } from '@/actions';
import { Product } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Categories } from '../../dashboard/ui';

interface Props {
  product: Product;
}

export const EditProductForm = ({ product }: Props) => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<Product>({
    defaultValues: {
      ...product
    }
  });

  const onSubmit = async (data: Product) => {
    const formdata = new FormData();

    if (product.id) {
      formdata.append('id', data.id);
    }
    formdata.append('description', data.description);
    formdata.append('image', data.image);
    formdata.append('category', data.category);
    formdata.append('title', data.title);
    formdata.append('isSet', String(data.isSet));

    const response = await createUpdateProduct(formdata);

    // console.log(response)

    if (!!response?.error) {
      console.error(response.error, 'No se pudo grabar el producto');
      alert('No se pudo grabar el producto');
      return;
    } else {
      console.log('Producto grabado con exito');
      alert('Producto grabado con exito');
    }
    router.replace('/admin');
    return;
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full mb-16'>
        <fieldset className='fieldset w-3xl bg-teal-100 border border-accent p-4 rounded-box shadow-2xs place-content-center'>
          <label className='fieldset-label text-teal-600 text-lg'>Imagen</label>
          <div className='w-96 rounded-2xl'>
            <Image
              style={{
                width: 600
              }}
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              priority
            />
          </div>

          <legend className='fieldset-legend text-teal-600 text-lg'>{product.title}</legend>
          <label className='fieldset-label text-teal-600 text-lg'>Titulo</label>
          <input
            type='text'
            className='input bg-white border-accent'
            placeholder=''
            {...register('title')}
          />
          <label className='fieldset-label text-teal-600 text-lg'>Descripción</label>
          <textarea
            className='textarea  bg-white border-accent'
            placeholder='Descripción'
            {...register('description')}></textarea>
          <label className='fieldset-label  text-teal-600 text-lg'>Categoría</label>
          <select
            defaultValue='Pick a color'
            className='select  bg-white border-accent'
            {...register('category')}>
            {Categories.map((category) => (
              <option key={category.name}>{category.name}</option>
            ))}
          </select>
          <label className='fieldset-label text-teal-600 text-lg'>Conjunto</label>
          <input
            type='checkbox'
            defaultChecked={false}
            className='checkbox checkbox-lg bg-teal-400 border-accent text-black'
            {...register('isSet')}
          />
          <button className='btn bg-teal-600 border-none'>Guardar</button>
        </fieldset>
      </form>
    </div>
  );
};
