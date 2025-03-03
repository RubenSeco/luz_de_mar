import { Header, Logo, Title, Footer } from '../../ui';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-row h-full'>
        <div className='flex flex-row'>
          <div className='flex flex-col-reverse w-full md:flex-col md:w-5/12 -z-10'>
            <Title />
            <Logo />
          </div>
          <div className='md:columns-2 columns-1 gap-4 p-5 m-4 w-full border shadow-slate-400 rounded'>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
