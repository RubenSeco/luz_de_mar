'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Product } from '@prisma/client';
import Link from 'next/link';

interface Props {
  product: Product;
}

export function CategoryCard({ product }: Props) {
  return (
    <Card
      sx={{ maxWidth: 300, height: 420 }}
      className='rounded shadow-black shadow-md'>
      <CardActionArea>
        <CardMedia
          component='img'
          style={{
            height: 300,
            width: 300
          }}
          alt={product.title}
          image={product.image}
        />
      </CardActionArea>
      <CardContent>
        <h1 className='font-montserrat font-bold'>{product.title}</h1>
      </CardContent>
      <CardActions>
        <Link
          className=' rounded shadow-sm p-3 text-sm place-items-center bg-teal-300/60 hover:bg-teal-200/50 transition-all'
          href={`/dashboard/${product.category}`}>
          <h4>VER MAS</h4>
        </Link>
      </CardActions>
    </Card>
  );
}
