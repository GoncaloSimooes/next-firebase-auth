"use client";

import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from './context/AuthContext';

type Props = {
  children?: React.ReactNode;
};

export const Provider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </SessionProvider>
  );
};
