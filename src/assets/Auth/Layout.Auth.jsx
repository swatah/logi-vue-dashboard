import React, { useState } from "react";
import SignUp from "./SignUp.Auth";
import Login from "./Login.Auth";
export default function LayoutAuth() {

  const [showSignUp, setShowSignUp] = useState(false);
  console.log("Currently showing:", showSignUp ? "SignUp" : "Login");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%]">
        <div className="relative w-full h-screen overflow-hidden">
          <video
            src="videos/videoBanner/videoBanner.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* Overlay */}
          <div className="absolute  top-0 left-0 w-full h-full flex flex-col items-center justify-end text-center text-white">
            <div className="w-full space-y-4 h-120 bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-9xl font-bold mb-2">
                Logi<span className="text-[#46bbe3]">Vue</span> AI
              </h1>
              <hr className="border w-180 mt-5 border-[#46bbe3]"/>
              <p className="text-sm md:text-5xl mt-3">
                Empowering Intelligence Through Sensory Innovation
              </p>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="">
            <figure className="w-58 flex m-auto mb-6">
              <img src="/images/logo/logo.svg" alt="logo" />
            </figure>
          </div>
          <div className="flex justify-center items-center h-[calc(100vh-22rem)]">
            {showSignUp ?(
              <SignUp switchForm={() => setShowSignUp(false)} />
            ):(
              <Login switchForm={() => setShowSignUp(true)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}


