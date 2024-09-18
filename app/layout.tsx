'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) =>   (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider>
            <AuthContextProvider>
              <Navbar/>
              {children}
            </AuthContextProvider>
          </SessionProvider>
      </body>
    </html>
  );


export default RootLayout