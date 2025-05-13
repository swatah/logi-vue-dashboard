import { Bell, BrainCircuit, Camera,  Clock,  Save, Tag, Warehouse } from "lucide-react";
import React from "react";

export default function BayConfig() {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Bay Configuration</h1>
          <button className="bg-[#46bbe3] text-white px-5 py-2 rounded-lg flex items-center gap-x-3 ">
            <Save />
            Save Configure
          </button>
        </div>
      </div>
      <hr className="border border-gray-200" />
      <div className="-mx-2 flex flex-wrap">
  <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
    <div className="border border-gray-300 rounded-lg p-3">
      <div className="flex gap-x-3 font-semibold">
        <Warehouse />
        <h1>Core Bay Configuration</h1>
      </div>
      <hr className="border-gray-200 my-3" />
    </div>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
    <div className="border border-gray-300 rounded-lg p-3">
      <div className="flex gap-x-3 font-semibold">
        <Camera />
        <h1>Camera & Sensor Association</h1>
      </div>
      <hr className="border-gray-200 my-3" />
    </div>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
    <div className="border border-gray-300 rounded-lg p-3">
      <div className="flex gap-x-3 font-semibold">
        <Clock />
        <h1>Operational Settings</h1>
      </div>
      <hr className="border-gray-200 my-3" />
    </div>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
    <div className="border border-gray-300 rounded-lg p-3">
      <div className="flex gap-x-3 font-semibold">
      <Bell />
      <h1>Event & Alert Settings</h1>
      </div>
      <hr className="border-gray-200 my-3" />
    </div>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
    <div className="border border-gray-300 rounded-lg p-3">
      <div className="flex gap-x-3 font-semibold">
      <Tag />
      <h1>Metadata & Integration</h1>
      </div>
      <hr className="border-gray-200 my-3" />
    </div>
  </div>
</div>

    </>
  );
}
