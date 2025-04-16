import Image from 'next/image';
import Link from 'next/link';
// import { IoMenu } from 'react-icons/io5';
import { DropDownMenu } from './DropDownMenu';

export const Categories = [
  {
    name: 'bracelet',
    title: 'Pulseras'
  },
  {
    name: 'necklace',
    title: 'Collares'
  },
  {
    name: 'earring',
    title: 'Aros'
  },
  {
    name: 'key_chain',
    title: 'Llaveros'
  },
  {
    name: 'set',
    title: 'Conjuntos'
  }
];

export const Header = () => {
  return (
    <>
      <header className='bg-white w-full border-b-2 border-b-gray-200'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='md:flex md:items-center md:gap-12'>
              <Link href='/dashboard'>
                <Image
                  src='/images/LOGOdibujo.jpg'
                  style={{
                    height: 'auto',
                    width: 'auto'
                  }}
                  alt='Logo'
                  width={50}
                  height={50}
                />
              </Link>
            </div>

            <div className='hidden md:block'>
              <nav aria-label='Global'>
                <ul className='flex items-center gap-6 text-base'>
                  {Object.values(Categories).map((category) => (
                    <li key={category.name}>
                      <Link
                        className='text-teal-700 transition-all font-montserrat font-bold hover:text-teal-600/80'
                        href={`/dashboard/${category.name}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex items-center gap-4 text-black z-30 bg-teal-600'></div>
            <DropDownMenu />
          </div>
        </div>
      </header>
    </>
  );
};
