"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoanding] = useState(true);

  const handleSingIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
    setLoanding(false);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthenticantion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoanding(false);
    };
    checkAuthenticantion();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/pages/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/pages/profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSingIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSingIn} className="p-2 cursor-pointer">
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
