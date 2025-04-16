import Image from 'next/image';

export const Title = () => {
  return (
    <div className='mb-10 md:mb-0 bg-slate-100/50'>
      <Image
        className='object-contain p-4 md:p-8'
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
  );
};
