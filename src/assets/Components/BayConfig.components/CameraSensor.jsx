import React from "react";

export default function CameraSensor() {
  return (
    <>
      <div className="p-4 space-y-2 grid grid-cols-1 gap-4">
        <div className="space-y-5">
          <label htmlFor="cameraId">Camera ID(s)</label>
          <div className="">
            <input
              id="cameraId"
              name="cameraId"
              placeholder="e.g., 192.168.1.100"
              className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
            />
            <p className="text-gray-400 text-sm">
              Linked to this bay for event detection
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <label htmlFor="lprCameraId">LPR Camera ID</label>
          <div className="">
            <input
              id="lprCameraId"
              name="lprCameraId"
              placeholder="e.g., 554"
              className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
            />
            <p className="text-gray-400 text-sm">
              If different from main cameras
            </p>
          </div>
        </div>
        <div className="space-y-5">
        <label htmlFor="roi">Camera Field of View or Placement Info</label>
        <textarea
          id="roi"
          rows="5"
          name="roi"
          placeholder="Optional metadata about camera placement"
          className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
        />
      </div>
      </div>
    </>
  );
}
