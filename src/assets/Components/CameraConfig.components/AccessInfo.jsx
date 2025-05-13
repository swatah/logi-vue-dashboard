import React from "react";

export default function AccessInfo() {
  return (
    <>
      <div className="p-4 space-y-2 grid grid-cols-1 gap-4">
        <div className="space-y-5">
          <label htmlFor="ipAddress">IP Address / Hostname</label>
          <input
            id="ipAddress"
            name="ipAddress"
            placeholder="e.g., 192.168.1.100"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="port">Port</label>
          <input
            id="port"
            name="port"
            placeholder="e.g., 554"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            placeholder="Camera username"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Camera password"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="macAddress">MAC Address (optional)</label>
          <input
            id="macAddress"
            name="macAddress"
            placeholder="e.g., 00:1A:2B:3C:4D:5E"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="ipAddress">Ping / Health Check Status</label>
          <div className="w-full outline-none bg-transparent text-base border-gray-200 border rounded-md py-2 mt-2 px-2">
            <span className="text-green-600">Online</span>
          </div>
        </div>
      </div>
    </>
  );
}
