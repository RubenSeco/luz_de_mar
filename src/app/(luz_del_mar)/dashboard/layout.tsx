<<<<<<< HEAD:src/app/(luz_del_mar)/dashboard/layout.tsx
import { Header, Logo, Title, Footer } from '../../ui';
=======
import { Header, Logo, Title, Footer } from '../ui';
>>>>>>> 1e8a6c6eb01bc463d547ae6b0bb691256e15f843:src/app/(luz_del_mar)/layout.tsx

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
          <div className='justify-center items-center w-full border m-5 shadow-slate-400 rounded md:flex md:flex-row md:w-9/12'>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
