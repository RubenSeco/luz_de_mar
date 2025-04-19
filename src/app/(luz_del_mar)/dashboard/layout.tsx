import { Footer, Header, Logo, Title } from "./ui";


export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-1 flex-col min-h-screen max-w-screen'>
      <div className='sticky top-0 z-20'>
        <Header />
      </div>

      <div className='md:mt-10 sm:px-6 sticky md:top-16 top-20 mt-0 z-10 flex h-auto flex-col-reverse md:flex-col sm:w-4/12 sm:fixed'>
        <Title />
        <Logo />
      </div>
      <div className='sm:w-8/12 sm:ml-auto h-full place-content-center flex px-2 sm:px-4 my-0 sm:m-4 w-full'>{children}</div>

      <Footer />
    </div>
  );
}
