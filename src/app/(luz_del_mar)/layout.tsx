import Footer from '../ui/Footer';
import { Header } from '../ui/Header';
import { Logo } from '../ui/Logo';
import { Title } from '../ui/Title';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='flex flex-col md:h-screen'>
        <Header />
        <div className='flex flex-col md:flex-row justify-stretch mt-16'>
          <div className='flex flex-col-reverse w-full md:flex-col md:w-3/12 -z-10'>
            <Title />
            <Logo />
          </div>
          <div className='items-center w-full md:flex md:flex-row md:w-9/12'>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
