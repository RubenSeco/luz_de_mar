import Image from 'next/image';

export const Logo = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <Image
          className='object-cover'
          src={'/images/LOGOdibujo.jpg'}
          height={1000}
          width={1000}
          alt={'Principal'}
        />
      </div>
    </>
  );
};
