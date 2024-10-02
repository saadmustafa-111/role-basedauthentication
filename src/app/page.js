"use client";
import Image from "next/image";
import Login from "./component/Login";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-slate-100">
      <Login />
      {/* <Signup /> */}
    </div>
  );
}
