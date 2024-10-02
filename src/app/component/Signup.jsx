"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
const Signup = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, role }));
    setname("");
    setemail("");
    setpassword("");
    setrole("");
    router.push("/");
  };
  return (
    <div className="flex flex-col  p-10 mx-10 items-center justify-center  ">
      <form
        action="
          "
        onSubmit={handleSubmit}
        className="bg-white  p-8  shadow-md w-full max-w-md"
      >
        <h1 className="text-xl font-bold mb-4 text-center">Sign up </h1>
        <label className="block  w-full mb-1">Name</label>
        <input
          type="text"
          name=""
          value={name}
          onChange={(e) => setname(e.target.value)}
          id=""
          className="border border-gray-300 p-2 mb-4   rounded-md  w-full"
          placeholder="Enter Your User Name..."
        />
        <label className="block mb-1 w-full">Email</label>
        <input
          type="email"
          name=""
          value={email}
          onChange={(e) => setemail(e.target.value)}
          id=""
          className="border border-gray-300 p-2 mb-4   rounded-md  w-full"
          placeholder="Enter Your Email address..."
        />
        <label className="block mb-1 w-full">Password</label>
        <input
          type="password"
          name=""
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          id=""
          className="border border-gray-300 p-2 mb-4   rounded-md  w-full"
          placeholder="Create your password..."
        />
        <select
          name="
              "
          value={role}
          onChange={(e) => setrole(e.target.value)}
          id=""
        >
          <option value="">User Type</option>
          <option value="Admin">Admin</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <br />
        <button className="w-full bg-blue-500 text-white rounded-md p-2 mt-5 hover:bg-blue-600">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
