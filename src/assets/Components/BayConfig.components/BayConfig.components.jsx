import {
  Bell,
  BrainCircuit,
  Camera,
  Clock,
  Save,
  Tag,
  Warehouse,
} from "lucide-react";
import React from "react";
import CoreBayConfig from "./CoreBayConfig";
import CameraSensor from "./CameraSensor";
import Operational from "./Operational";
import EventsAlerts from "./EventsAlerts";
import Metadata from "./Metadata";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-300 rounded-lg p-3 row-span-2 h-fit">
          <div className="flex gap-x-3 font-semibold">
            <Warehouse />
            <h1>Core Bay Configuration</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <CoreBayConfig />
        </div>

        <div className="border border-gray-300 rounded-lg p-3 h-fit">
          <div className="flex gap-x-3 font-semibold">
            <Camera />
            <h1>Camera & Sensor Association</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <CameraSensor />
        </div>

        <div className="border border-gray-300 rounded-lg p-3 h-fit">
          <div className="flex gap-x-3 font-semibold">
            <Clock />
            <h1>Operational Settings</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <Operational />
        </div>

        <div className="border border-gray-300 rounded-lg p-3 h-fit">
          <div className="flex gap-x-3 font-semibold">
            <Bell />
            <h1>Event & Alert Settings</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <EventsAlerts />
        </div>

        <div className="border border-gray-300 rounded-lg p-3 h-fit">
          <div className="flex gap-x-3 font-semibold">
            <Tag />
            <h1>Metadata & Integration</h1>
          </div>
          <hr className="border-gray-200 my-3" />
          <Metadata/>
        </div>
      </div>
    </>
  );
}
