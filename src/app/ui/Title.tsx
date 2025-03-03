import Image from 'next/image';

export const Title = () => {
  return (
    <>
      <div className='md:p-2 mb-10 md:mb-1'>
        <div className='relative h-36'>
          <Image
            className='object-contain p-4 mmd:p-6'
            style={{
              height: 'auto',
              width: 'auto'
            }}
            height={1000}
            width={1000}
            src='/images/LOGOletras.png'
            alt='Title'
          />
        </div>
      </div>
    </>
  );
};
