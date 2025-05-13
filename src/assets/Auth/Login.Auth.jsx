import React from "react";
import { User, Mail, Phone, CreditCard, Building, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Login({ switchForm }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Dashboard");
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto p-6 bg-white">
        <div className="mb-10">
          <h2 className="text-4xl font-semibold mb-1 flex items-center">Welcome <HeartHandshake className="w-10 text-[#46bbe3]"/></h2>
          <h2 className="text-4xl font-semibold mb-1">Login your account</h2>
          <p className="text-xl text-gray-500 mb-6">
            Enter detail to Login on{" "}
              Logi<span className="text-[#46bbe3]">Vue</span> AI
            powered by Swatah.Ai
          </p>
        </div>
        <form className="space-y-4">
          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Mail className="w-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-8 outline-none bg-transparent text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <CreditCard className="w-5 text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-8 outline-none bg-transparent text-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-[#002D74] text-white font-semibold py-2 rounded-full mt-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="text-xl mt-10 text-gray-500 flex items-center justify-center">
          I Don't have any account?{" "}
          <span
            onClick={switchForm}
          className="ml-1 text-[#46bbe3] cursor-pointer font-semibold"
          >
            Register
          </span>
        </p>
      </div>
    </>
  );
}
