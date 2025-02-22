'use client';

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <>
      <h1>Home</h1>
      <p>Page content</p>
    </>
  );
}
