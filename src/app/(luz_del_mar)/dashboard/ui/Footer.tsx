import Link from 'next/link';
import React from 'react';

import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

// import './Footer.css';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='fixed bottom-0 flex flex-col w-full justify-center bg-gray-200 z-20'>
      <div className='pt-3 w-full'>
        <div className='mb-3 flex flex-row justify-evenly'>
          <Link
            href={'#'}
            className='text-3xl text-teal-700 transition-all hover:text-teal-600/80'>
            <IoLogoFacebook />
          </Link>
          <Link
            href={'#'}
            className='text-3xl text-teal-700 transition-all hover:text-teal-600/80'>
            <IoLogoInstagram />
          </Link>
        </div>
      </div>
      {/*Copyright section*/}
      <div className='bg-gray-300 p-2 text-center text-teal-700 font-bold'>
        © 2025 Copyright:
        <span>{'  '}Luz Del Mar</span>
      </div>
    </footer>
  );
};
