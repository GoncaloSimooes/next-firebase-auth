"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Spinner from "../../components/Spinner";

const page = () => {
  const { user } = UserAuth();
  const [loanding, setLoanding] = useState(true);

  useEffect(() => {
    const checkAuthenticantion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoanding(false);
    };
    checkAuthenticantion();
  }, [user]);

  return (
    <div className="p-4">
      {loanding ? (
        <Spinner />
      ) : user ? (
        <p>
          Welcome, {user.displayName} - You are logged in to the profile page -
          a protected route
        </p>
      ) : (
        <p>You must be logged in to view this page - protected route.</p>
      )}
    </div>
  );
};

export default page;
