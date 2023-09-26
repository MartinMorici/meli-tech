import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Buscador from './components/Buscador';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meli Frontend',
  description: 'Meli Frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className='bg-[#fff159] w-full'>
          <Buscador/>
        </header>

        <main className='flex-grow bg-[#ebebeb]'>{children}</main>
      </body>
    </html>
  );
}
