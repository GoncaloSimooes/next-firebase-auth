"use client";
import { signOut, signIn, useSession } from "next-auth/react";
import { UserAuth } from "./context/AuthContext";

export default function Home() {
  const { data: session, status } = useSession();
  const {user} = UserAuth()
  
  

  console.log('Estou na Pagina Home', user, status)
  const showPageContent = () => {
// checking if sessions exists
if (session) {
  // rendering components for logged in users
  return (
      <>
      <p>Welcome {session.user?.name}. Signed In As</p>
      <p>{session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
      </>
  )
}
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Home</h1>
     {showPageContent()} 
    </main>
  );
}