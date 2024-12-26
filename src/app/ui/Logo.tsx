import Image from 'next/image';

export const Logo = () => {
  return (
    <>
      <div className='relative flex w-full h-64 md:w-6/12 '>
        <Image
          fill
          className='object-cover'
          src={'/images/LOGOdibujo.jpg'}
          alt={'Principal'}
        />
      </div>
    </>
  );
};
