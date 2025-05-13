import { BrainCircuit, Camera, Network, Save } from "lucide-react";
import React from "react";
import CoreCameraConfig from "./CoreCameraConfig";
import AccessInfo from "./AccessInfo";
import AiConfig from "./AiConfig";

export default function CameraConfig() {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Camera Configuration</h1>
          <button className="bg-[#46bbe3] text-white px-5 py-2 rounded-lg flex items-center gap-x-3 ">
            <Save />
            Save Configure
          </button>
        </div>
      </div>
      <hr className="border border-gray-200" />
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-gray-300 rounded-lg p-3">
          <div className="flex gap-x-3 font-semibold">
            <Camera />
            <h1>Core Camera Configuration</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <CoreCameraConfig/>
        </div>
        <div className="border border-gray-300 rounded-lg p-3">
          <div className="flex gap-x-3 font-semibold">
            <Network />
            <h1>Network & Access Information</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <AccessInfo/>
        </div>
        <div className="border border-gray-300 rounded-lg p-3">
          <div className="flex gap-x-3 font-semibold">
            <BrainCircuit />
            <h1>AI Processing Configuration</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <AiConfig/>
        </div>
      </div>
    </>
  );
}
