import Image from 'next/image';

export const Title = () => {
  return (
    <>
      <div className='md:p-2'>
        <div className='relative h-36'>
          <Image
            className='object-contain p-4 md:p-6'
            fill
            src='/images/LOGOletras.png'
            alt='Title'
          />
        </div>
      </div>
    </>
  );
};
