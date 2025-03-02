import { Header, Logo, Title, Footer } from '../../ui';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col md:h-screen'>
      <div className=''>
        <Header />
        <div className='flex flex-col md:flex-row justify-stretch mt-16'>
          <div className='flex flex-col-reverse w-full md:flex-col md:w-3/12 -z-10'>
            <Title />
            <Logo />
          </div>
          <div className='columns-2 gap-4 p-5 w-full min-h-full border shadow-slate-400 rounded'>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
