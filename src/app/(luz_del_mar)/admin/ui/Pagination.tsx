'use client';

import { generatePaginationNumbers } from '@/utils/generatePaginationNumbers';
import clsx from 'clsx';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface Props {
  totalPages: number;
}
export const Pagination = ({ totalPages }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get('page') ?? 1;

  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathName);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathName}?${String(params)}`;
    }

    if (+pageNumber <= 0) {
      return `${pathName}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathName}?${String(params)}`;
    }

    params.set('page', pageNumber.toString());

    return `${pathName}?${String(params)}`;
  };

  return (
    <div className='flex justify-center text-center my-4 '>
      <nav aria-label='Page navigation example'>
        <ul className='inline-flex -space-x-px text-sm'>
          <li>
            <Link
              href={createPageUrl(currentPage - 1)}
              className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-teal-500 hover:text-gray-700 dark:bg-teal-600 dark:border-gray-700 dark:text-gray-600 dark:hover:bg-teal-500 dark:hover:text-white'>
              <IoChevronBackOutline size={30} />
            </Link>
          </li>

          {allPages.map((page, index) => (
            <li key={index}>
              <Link
                href={createPageUrl(page)}
                className={clsx(
                  'flex items-center justify-center text-xl font-bold px-3 h-8 leading-tight text-gray-600 bg-white border border-e-0 border-gray-300  dark:text-gray-600 dark:border-gray-700',
                  {
                    'dark:hover:text-gray-400 hover:text-gray-400': page !== currentPage,
                    'hover:bg-teal-500 dark:hover:text-white  dark:bg-teal-600 dark:border-gray-700 dark:text-gray-300 text-gray-300 dark:hover:bg-teal-500':
                      page === currentPage
                  }
                )}>
                {page}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href={createPageUrl(currentPage + 1)}
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-teal-500 hover:text-gray-700 dark:bg-teal-600 dark:border-gray-700 dark:text-gray-600 dark:hover:bg-teal-500 dark:hover:text-white'>
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
