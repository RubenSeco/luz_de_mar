import { Header, Logo, Title, Footer } from '../../ui';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen'>
      <div className='sticky top-0'>
        <Header />
      </div>
      <div className='flex flex-col sm:flex-row h-full'>
        <div className='flex flex-col-reverse w-full sm:flex-col sm:w-5/12 -z-10 sm:mt-20'>
          <Title />
          <Logo />
        </div>
        <div className='flex px-2 sm:p-5 sm:m-4 w-full border shadow-slate-400 rounded'>{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
