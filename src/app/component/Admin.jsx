"use client";
import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100 p-10">
      {user && (
        <h1 className="text-3xl font-bold">
          Hello {user.name} Welcome to the Admin Dashboard
        </h1>
      )}
    </div>
  );
};

export default Admin;
