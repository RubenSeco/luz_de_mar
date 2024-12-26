import Image from 'next/image';

export const Title = () => {
  return (
    <>
      <div className=' w-full md:w-6/12 '>
        <div className='relative h-40 md:h-64'>
          <Image
            className='object-contain p-10 md:p-20'
            fill
            src='/images/LOGOletras.png'
            alt='Title'
          />
        </div>
      </div>
    </>
  );
};
