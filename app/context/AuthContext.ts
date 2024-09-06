import { createContext, useContext, ReactNode } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

// Definição do tipo para o contexto de autenticação
interface AuthContextType {
  user: any;
  googleSignIn: () => void;
  logOut: () => void;
}

// Criando o contexto e assegurando que ele foi exportado corretamente
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  const googleSignIn = () => {
    signIn('google');
  };

  const logOut = () => {
    signOut();
  };

  // Retornando o contexto
  return (
    <AuthContext.Provider value={{ user: session?.user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};
