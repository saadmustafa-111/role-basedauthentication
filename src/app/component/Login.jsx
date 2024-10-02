import React, { useState, useEffect } from "react";
import { login } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (user) {
        if (user.role === "Admin") {
          router.push("/admin");
        } else if (user.role === "Student") {
          router.push("/student");
        } else if (user.role === "Teacher") {
          router.push("/teacher");
        }
      }
    } else {
      setError("Invalid Email or password");
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="flex flex-col justify-center items-center p-10 mx-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
        {error && <p className="text-red-600 mb-4 mt-4">{error}</p>}

        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />

        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
