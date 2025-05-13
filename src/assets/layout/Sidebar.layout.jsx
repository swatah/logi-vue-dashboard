import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Truck Flow",
    svg: "/images/icons/Analytics.svg",
    to: "/Dashboard/TotalTrucks",
  },
  {
    title: "Dock Activity",
    svg: "/images/icons/Construction.svg",
    to: "/Dashboard/DockActivity",
  },
  {
    title: "Truck Timeline",
    svg: "/images/icons/Growth.svg",
    to: "/Dashboard/TruckTimeline",
  },
  {
    title: "Queue Insights",
    svg: "/images/icons/fire.svg",
    to: "/Dashboard/queue-insights",
  },
  {
    title: "Forklift Performance",
    svg: "/images/icons/forklift.svg",
    to: "/Dashboard/ForkliftPerformance",
  },
  {
    title: "Pallet Efficiency",
    svg: "/images/icons/package.svg",
    to: "/Dashboard/PalletEfficiency",
  },
  {
    title: "Compliance & Alerts",
    svg: "/images/icons/warning.svg",
    to: "/Dashboard/compliance",
  },
];

const configItems = [
  {
    title: "Bay Configuration",
    svg: "/images/icons/configuration.svg",
    to: "/Dashboard/BayConfig",
  },
  {
    title: "Camera Configuration",
    svg: "/images/icons/configuration.svg",
    to: "/Dashboard/CameraConfig"
  },
];

export default function Sidebar() {

  return (
    <>
      <div className="w-67 p-4 h-screen overflow-y-auto fixed">
        <Link to="">
          <figure className="w-48 flex m-auto mb-6">
            <img src="/images/logo/logo.svg" alt="logo" />
          </figure>
        </Link>
        <div className="mt-5">
          <hr className="border border-gray-200" />
          <p className="text-sm font-bold text-gray-700 justify-center uppercase cursor-pointer flex gap-x-2">
            Configurations
          </p>
          <hr className="border border-gray-200" />
          <ul className="space-y-4 mt-5 w-full">
            {configItems.map((items, index) => (
              <li key={index}>
                <Link
                  className="text-sm font-bold text-gray-700 uppercase cursor-pointer flex gap-x-2"
                  to={items.to}
                >
                  <img src={items.svg} alt="icons" className="w-5" />{" "}
                  {items.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <hr className="border border-gray-200" />
          <p className="text-sm font-bold text-gray-700 justify-center uppercase cursor-pointer flex gap-x-2">
            Menus
          </p>
          <hr className="border border-gray-200" />
          <ul className="space-y-4 mt-5 w-full">
            {menuItems.map((menu, idx) => (
              <li key={idx}>
                <Link 
                  className="text-sm font-bold text-gray-700  cursor-pointer flex gap-x-2"
                  // onClick={() => handleToggle(idx)}
                  to={menu.to}
                >
                  <img src={menu.svg} alt="icons" className="w-5" />{" "}
                  {menu.title}
                </Link>
                {/* {openIndex === idx && (
                <ul className="ml-10 mt-2 space-y-1 transition-all">
                  {menu.subItems.map((item, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={item.to}
                         
                        className={`block text-sm text-gray-600 hover:text-black hover:font-medium transition-all cursor-pointer ${
                          item.to === window.location.pathname ? "active font-bold border-b-2" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
