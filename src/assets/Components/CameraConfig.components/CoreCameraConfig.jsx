import React from "react";

export default function CoreCameraConfig() {
  const cameraType = ["Fixed", "Moving", "PTZ", "360", "LPR", "Thermal"];
  const streamType = ["RTSP", "SRT", "HTTP", "Onvif", "HLS"];
  const mountPosition = ["Celling", "Floor", "Wall", "Rack", "Pole", "Other"];
  return (
    <>
      <div className="p-4 space-y-2 grid grid-cols-1 gap-4">
        <div className="space-y-5">
          <label htmlFor="cameraId">Camera ID (unique)</label>
          <input
            id="cameraId"
            name="cameraId"
            placeholder="e.g., cam_001"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="cameraName">Camera Name / Label</label>
          <input
            id="cameraName"
            name="cameraName"
            placeholder="e.g., Dock 3D View"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="cameraType">Camera Type</label>
          <select className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2.5 mt-2 px-2">
            <option>Select Camera Type</option>
            {cameraType.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="space-y-5">
          <label htmlFor="streamType">Stream Type</label>
          <select className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2.5 mt-2 px-2">
            <option>Select Stream Type</option>
            {streamType.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="space-y-5">
          <label htmlFor="orientation">Orientation / Mount Position</label>
          <select className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2.5 mt-2 px-2">
            <option>Select Orientation Type</option>
            {mountPosition.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="space-y-5">
          <label htmlFor="fps">FPS (frames per second)</label>
          <input
            id="fps"
            name="fps"
            placeholder="e.g., 30"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="resolution">Resolution</label>
          <input
            id="resolution"
            name="resolution"
            placeholder="e.g., 1920 X 1080"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="streamUrl">Stream URL</label>
          <input
            id="streamUrl"
            name="streamUrl"
            placeholder="e.g., rtsp://user:pass@ip:port/path"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
      </div>
    </>
  );
}
