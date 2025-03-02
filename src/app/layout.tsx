import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import { montserrat } from './styles/fonts';

export const metadata: Metadata = {
  title: 'Luz del Mar',
  description: 'Luz del Mar'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`bg-white ${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
