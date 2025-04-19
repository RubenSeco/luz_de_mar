import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luz del Mar',
  description: 'Administración de productos'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-1 flex-col min-h-screen max-w-screen'>
      <h1 className='bg-white z-20 sticky top-0 py-4 text-4xl text-teal-600 border-b border-teal-500 '>Administración de productos</h1>
      <div className='flex flex-1 h-full w-full'>{children}</div>
    </div>
  );
}
