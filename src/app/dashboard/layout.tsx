import { Header } from '../ui/Header';
import { Logo } from '../ui/Logo';
import { Title } from '../ui/Title';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='flex flex-col w-full'>
        <Header />
        <div className='flex grow flex-col mt-16 md:flex-row -z-10'>
          <Title />
          <Logo />
        </div>
      </div>
      <div className='size-full'>{children}</div>
    </div>
  );
}
