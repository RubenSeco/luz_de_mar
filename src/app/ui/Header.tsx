import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

const Categories: string[] = ['Pulseras', 'Collares', 'Aros', 'Llaveros', 'Conjuntos'];

export const Header = () => {
  return (
    <>
      <header className='bg-white w-full border-b-2 border-b-gray-200'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='md:flex md:items-center md:gap-12'>
              <Link href='#'>
                <Image
                  // fill
                  src='/images/LOGOdibujo.jpg'
                  style={{
                    height: 'auto',
                    width: 'auto'
                  }}
                  alt='Logo'
                  width={50}
                  height={50}
                />
                <span className='sr-only'>Home</span>
              </Link>
            </div>

            <div className='hidden md:block'>
              <nav aria-label='Global'>
                <ul className='flex items-center gap-6 text-base'>
                  {Object.values(Categories).map((category) => (
                    <li key={category}>
                      <Link
                        className='text-teal-700 transition-all font-bold hover:text-teal-600/80'
                        href={'#'}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex items-center gap-4'>
              <Link
                className='rounded-md bg-gray-100 p-2 text-4xl  text-teal-700 hover:text-teal-600/80'
                href='#'>
                <IoMenu />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
