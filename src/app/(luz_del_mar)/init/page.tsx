import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className='w-full h-[600px] md:h-96 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='shadow-xl flex flex-col p-4 bg-gray-100'>
        <div className='size-full relative'>
          <Image
            fill
            src='/images/imagen15.jpg'
            alt='Pulsera'
            className='rounded-full object-cover shadow-xl transition-all'
          />
        </div>
        <button className='mt-5 rounded bg-violet-300 px-8 py-3 text-black'>Pulseras</button>
      </div>

      <div className='shadow-xl flex flex-col p-4 bg-gray-100'>
        <div className='size-full relative'>
          <Image
            fill
            src='/images/imagen20.jpg'
            alt='Pulsera'
            className='rounded-full object-cover shadow-xl transition-all'
          />
        </div>
        <button className='mt-5 rounded bg-violet-300 px-8 py-3 text-black'>Collares</button>
      </div>
      <div className='shadow-xl flex flex-col p-4 bg-gray-100'>
        <div className='size-full relative'>
          <Image
            fill
            src='/images/20230218_160753-01.jpeg'
            alt='Pulsera'
            className='rounded-full object-cover shadow-xl transition-all'
          />
        </div>
        <button className='mt-5 rounded bg-violet-300 px-8 py-3 text-black'>Aros</button>
      </div>
      <div className='shadow-xl flex flex-col p-4 bg-gray-100'>
        <div className='size-full relative'>
          <Image
            fill
            src='/images/20231010_171159-01.jpeg'
            alt='Pulsera'
            className='rounded-full object-cover shadow-xl transition-all'
          />
        </div>
        <button className='mt-5 rounded bg-violet-300 px-8 py-3 text-black'>Llaveros</button>
      </div>
    </div>
  );
}
