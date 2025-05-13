import React from "react";
import { User, Mail, CreditCard, Building } from "lucide-react";
export default function SignUp({switchForm}) {
  return (
    <>
      <div className="w-full max-w-md mx-auto p-6 bg-white">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-1">Create your account</h2>
          <p className="text-xl text-gray-500 mb-6">
            Enter detail to Register on{" "}
              Logi<span className="text-[#46bbe3]">Vue</span> AI
             powered by Swatah.Ai
          </p>
        </div>
        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <User className="w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-8 outline-none bg-transparent text-base"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Mail className="w-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-8 outline-none bg-transparent text-sm"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Building className="w-5 text-gray-400 mr-2" />
            <input
              type="tel"
              placeholder="Organization Name"
              className="w-full h-8 outline-none bg-transparent text-sm"
            />
          </div>

          {/* Type of Subscription */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <CreditCard className="w-5 text-gray-400 mr-2" />
            <select
              className="w-full h-8 outline-none bg-transparent text-sm appearance-none"
              defaultValue=""
            >
              <option value="" disabled className="">
                Type of Subscription
              </option>
              <option value="level1">Level 1</option>
              <option value="level2">Level 2</option>
              <option value="level3">Level 3</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-[#002D74] text-white font-semibold py-2 rounded-full mt-2"
          >
            Register
          </button>
        </form>
        <p className="text-xl mt-10 text-gray-500 flex items-center justify-center">
          Already have an account?{" "}
          <span className="ml-1 text-[#46bbe3] cursor-pointer font-semibold" onClick={switchForm}>
            Login
          </span>
        </p>
      </div>
    </>
  );
}
