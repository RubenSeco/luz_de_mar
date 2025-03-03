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
                <ul className='flex items-center gap-6 text-sm'>
                  {Object.values(Categories).map((category) => (
                    <li key={category}>
                      <a
                        className='text-teal-700 transition font-bold hover:text-teal-600-500/75'
                        href='/pulseras'>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex items-center gap-4'>
              <div className='sm:flex sm:gap-4'>
                <div className='hidden sm:flex'>
                  <Link
                    className='rounded-md bg-gray-100 p-2 text-4xl font-medium text-teal-600'
                    href='#'>
                    <IoMenu />
                  </Link>
                </div>
              </div>

              <div className='block md:hidden'>
                <button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
