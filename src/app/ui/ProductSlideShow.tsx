'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@mui/material';
import { Product } from '@prisma/client';
import Image from 'next/image';

interface Props {
  products: Product[];
}

export default function ProductSlideShow({ products }: Props) {
  return (
    <div className='sm:mx-20 sm:w-auto w-full border'>
      <Carousel
        opts={{
          loop: true
        }}>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <Card>
                <CardContent>
                  <h1 className='text-center font-montserrat text-xl'>{product.title}</h1>
                  <Image
                    className='sm:m-4 object-contain'
                    style={{
                      width: 600,
                      height: 350
                    }}
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    priority></Image>
                  <span className='font-montserrat'>{product.description}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden justify-center items-center sm:flex' variant={"link"}/>
        <CarouselNext className='hidden justify-center items-center sm:flex' variant={"link"} />
      </Carousel>
    </div>
  );
}
