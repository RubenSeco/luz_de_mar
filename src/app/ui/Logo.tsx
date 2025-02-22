import Image from 'next/image';

export const Logo = () => {
  return (
    <>
      <div className='hidden md:block relative w-full h-36 md:h-64'>
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
