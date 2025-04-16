'use client';

import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import { Categories } from './Header';
import { categoryStore } from '@/store/ui.store';

export const DropDownMenu = () => {
  
  const isMenuOpen = categoryStore((state) => state.isMenuOpen);
  const closeMenu = categoryStore((state) => state.closeMenu);
  const openMenu = categoryStore((state) => state.openMenu);


  return (
    <div
      onClick={!isMenuOpen ? () => openMenu() : () => isMenuOpen}
      className='dropdown dropdown-end z-40'>
      <div
        tabIndex={0}
        role='button'
        className='btn m-1 bg-teal-600 text-3xl border-none hover:bg-teal-500 transition-all'>
        <IoMenu />
      </div>
      {isMenuOpen && (
        <ul
          tabIndex={0}
          className='dropdown-content menu bg-teal-600 rounded-box z-1 w-52 p-2 shadow-sm text-lg'>
          <li>
            <details>
              <summary>Productos</summary>
              <ul>
                {Categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      onClick={() => closeMenu()}
                      href={`/dashboard/${category.name}`}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <span className='divider divider-info'></span>
          <li>
            <a>Subscribirse</a>
          </li>
        </ul>
      )}
    </div>
  );
};
