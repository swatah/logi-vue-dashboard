import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Truck Flow",
    svg: "images/icons/Analytics.svg",
    to: "/TotalTrucks",
    // subItems: [
    //   { label: "Total Trucks Today", to: "/TotalTrucks" },
    //   { label: "Average Dwell Time", to: "/AvgDwell" },
    //   { label: "Idle Time (Before/After Loading)", to: "#" },
    //   { label: "Turnbacks & Overstays", to: "#" },
    // ],
  },
  {
    title: "Dock Activity",
    svg: "images/icons/Construction.svg",
    to: "/DockActivity",
    // subItems: [
    //   { label: "Historical Dock Sessions", to: "#" },
    //   { label: "Dock Utilization Trends", to: "#" },
    // ],
  },
  {
    title: "Truck Timeline",
    svg: "images/icons/Growth.svg",
    to: "/TruckTimeline",
    // subItems: [
    //   { label: "Gantt View (Entry → Exit)", to: "#" },   //{(Gantt View) Entry → Queue → Dock session → Exit}
    //   { label: "Bottleneck Highlights", to: "#" },     //show the bottleneck on the graph at the time of bottleneck , basicly show trafic at that time
    // ],
  },
  {
    title: "Queue Insights",
    svg: "images/icons/fire.svg",
    to: "/queue-insights",
    // subItems: [
    //   { label: "Hourly Heatmap (Historical)", to: "#" },
    //   { label: "Queue Trends", to: "#" },
    // ],
  },
  {
    title: "Forklift Performance",
    svg: "images/icons/forklift.svg",
    to: "/ForkliftPerformance",
    // subItems: [
    //   { label: "Active vs Idle Time", to: "#" },
    //   { label: "Trips per Hour", to: "#" },
    //   { label: "Distance Moved", to: "#" },
    // ],
  },
  {
    title: "Pallet Efficiency",
    svg: "images/icons/package.svg",
    to: "/PalletEfficiency",
    // subItems: [
    //   { label: "Avg Pallets per Truck", to: "#" },
    //   { label: "Loading Speed", to: "#" },
    //   { label: "% Handled Manually", to: "#" },
    // ],
  },
  {
    title: "Compliance & Alerts",
    svg: "images/icons/warning.svg",
    to: "/compliance",
    // subItems: [
    //   { label: "Plate Mismatches", to: "#" },
    //   { label: "Missed Time Slots", to: "#" },
    //   { label: "Unauthorized Entries", to: "#" },
    // ],
  },
];

const configItems = [
  {
    title: "Bay Configuration",
    svg: "images/icons/configuration.svg",
    to: "/bay-configuration",
    // subItems: [{ label: "coming soon", to: "#" }],
  },
  {
    title: "Camera Configuration",
    svg: "images/icons/configuration.svg",
    to: "/camera-configuration",
    // subItems: [
    //   { label: "Schedule", to: "#" },
    //   { label: "Update Firmware", to: "#" },
    //   { label: "Reboot", to: "#" },
    // ],
  },
];

export default function Sidebar() {
  // const [openIndex, setOpenIndex] = useState(null);
  // const [openCofigIndex, setOpenConfigIndex] = useState(null);

  // const handleToggle = (index) => {
  //   setOpenIndex((prev) => (prev === index ? null : index));
  // };
  // const handleConfigToggle = (index) => {
  //   setOpenConfigIndex((prev) => (prev === index ? null : index));
  // };

  return (
    <>
      <div className="w-67 p-4 h-screen overflow-y-auto fixed">
        <Link to="/">
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
                  // onClick={() => handleConfigToggle(index)}
                  to={items.to}
                >
                  <img src={items.svg} alt="icons" className="w-5" />{" "}
                  {items.title}
                </Link>
                {/* {openCofigIndex === index && (
                  <ul className="ml-10 mt-2 space-y-1 transition-all">
                    {items.subItems.map((submenu, i) => (
                      <li
                        key={i}
                        className="block text-sm text-gray-600 hover:text-black hover:font-medium transition-all cursor-pointer"
                      >
                        {submenu.label}
                      </li>
                    ))}
                  </ul>
                )} */}
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
