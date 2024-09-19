'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import { Provider } from './provider';


const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) =>   (
    <html lang="en">
      <body className={inter.className}>
          <Provider>
            <AuthContextProvider>
              <Navbar/>
              {children}
            </AuthContextProvider>
          </Provider>
      </body>
    </html>
  );


export default RootLayout