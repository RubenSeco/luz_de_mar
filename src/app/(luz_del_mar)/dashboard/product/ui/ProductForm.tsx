'use client';

import { Category } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import Image from 'next/image';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createProduct } from '@/app/actions/create-product';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.'
  }),
  category: z.nativeEnum(Category).default(Category.necklace),
  image: z.string().url({ message: 'Image must be a valid URL.' }),
  description: z.string().min(2, { message: 'Description must be at least 2 characters.' }).max(255)
});

export const ProductForm = () => {
  const [formSended, setFormSended] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      category: Category.necklace,
      image: '',
      description: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('category', values.category);
    formData.append('image', values.image);
    formData.append('description', values.description);
    formData.append('slug', values.title.toString().toLowerCase().replace(/ /g, '-').trim());

    const response = await createProduct(formData);
    setFormSended(true);

    if (!!response?.error) {
      console.error(response.error, 'No se pudo grabar el producto');
      alert('No se pudo grabar el producto');
      return;
    } else {
      console.log('Producto grabado con exito');
      alert('Producto grabado con exito');
      setFormSended(true);
    }
    return;
  }

  useEffect(() => {
    form.reset();
    setFormSended(false);
  }, [form, formSended]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col sm:grid sm:grid-cols-2'>
        {/* Titulo */}

        <div className='mx-4'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulo</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Descripcion */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    onChange={field.onChange}
                    placeholder='Descripción del producto'
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Categoria */}
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoría</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(Category).map((category) => (
                      <SelectItem
                        key={category}
                        value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        <div className='flex flex-col h-full justify-center items-center'>
        <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input
                  onChange={field.onChange}
                  type='file'
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.getValues().image ? (
          <Image
            className='rounded-sm shadow-md object-cover'
            src={`${form.getValues().image.replace('C:\\fakepath\\', '/images/')}`}
            width={250}
            height={200}
            alt={'Imagen del producto'}
          />
        ) : (
          <MdOutlinePhotoCamera className='w-full h-24 justify-center items-center' />
        )}
        </div>
        {/* Imagen */}



        <div className='flex justify-center'>
          <Button
            type='submit'
            className='bg-teal-700 hover:bg-teal-600'>
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
};
