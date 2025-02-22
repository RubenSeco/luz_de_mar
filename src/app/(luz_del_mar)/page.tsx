// 'use client'

import { redirect } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return redirect('');
}
