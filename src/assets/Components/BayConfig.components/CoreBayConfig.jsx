import { CaravanIcon, CircleHelp, Forklift, Truck } from "lucide-react";
import React, { useState } from "react";

export default function CoreBayConfig() {
  const status = ["Active", "Inactive", "Under Maintenance"];
  const bayType = ["Loading Bay", "Unloading Bay", "Both", "Reserved"];

  const [formData, setFormData] = useState({
    bayId: "",
    bayName: "",
    siteId: "",
    zoneName: "",
    status: "",
    bayType: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [vehicleTypes, setVehicleTypes] = useState({
    truck: false,
    van: false,
    forklift: false,
    other: false,
  });

  const handleVehicleTypeChange = (type) => {
    setVehicleTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  return (
    <>
      <div className="p-4 space-y-2 grid grid-cols-1 gap-4">
        <div className="space-y-5">
          <label htmlFor="bayId">Bay ID (unique)</label>
          <input
            id="bayId"
            name="bayId"
            placeholder="e.g., bay_001"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="bayName">Bay Name / Label</label>
          <input
            id="bayName"
            name="bayName"
            placeholder="Bay Name / Label (e.g., Dock 3A)"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="zone">Zone / Area Name</label>
          <input
            id="zone"
            name="zone"
            placeholder="Zone / Area Name (e.g., North Wing)"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="locationId">Location / Site ID</label>
          <input
            id="locationId"
            name="locationId"
            placeholder="Location / Site ID"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Bay Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.bayType}
            onChange={(e) => handleInputChange("bayType", e.target.value)}
          >
            <option value="">Select Bay Type</option>
            {bayType.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Status</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
          >
            <option value="">Select Status</option>
            {status.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Allowed Vehicle Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 py-5">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={vehicleTypes.truck}
                  className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => handleVehicleTypeChange("Truck")}
                />
                <span className="flex items-center gap-x-2">
                  <Truck />
                  <span className="text-base">Truck</span>
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={vehicleTypes.forklift}
                  className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => handleVehicleTypeChange("forklift")}
                />
                <span className="flex items-center gap-x-2">
                  <Forklift/>
                  <span className="text-base">Forklift</span>
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={vehicleTypes.van}
                  className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => handleVehicleTypeChange("van")}
                />
                <span className="flex items-center gap-x-2">
                  <CaravanIcon/>
                  <span className="text-base">Van</span>
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={vehicleTypes.other}
                  className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => handleVehicleTypeChange("")}
                />
                <span className="flex items-center gap-x-2">
                  <CircleHelp />
                  <span className="text-base">Other</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
