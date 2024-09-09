import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, googleSignIn, logOut } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
      <ul className='flex'>
        <li className='p-2 cursor-pointer'>
          <Link href='/'>Home</Link>
        </li>
        <li className='p-2 cursor-pointer'>
          <Link href='/about'>About</Link>
        </li>
        {user && (
          <li className='p-2 cursor-pointer'>
            <Link href='/profile'>Profile</Link>
          </li>
        )}
      </ul>

      {!loading && !user ? (
        <ul className='flex'>
          <li onClick={googleSignIn} className='p-2 cursor-pointer'>Login</li>
          <li onClick={googleSignIn} className='p-2 cursor-pointer'>Sign up</li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user?.name}</p>
          <p className='cursor-pointer' onClick={logOut}>Sign Out</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
