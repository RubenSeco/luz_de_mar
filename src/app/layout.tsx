import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Luz del Mar',
    default: 'Luz del Mar'
  },
  description: 'Productos de bijouterie',
  icons: {
    icon: [
      {
        url: '/favicon.ico', // /public path
        href: '/favicon.ico' // /public path
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
        />
      </head>
      <body className='bg-white'>{children}</body>
    </html>
  );
}
