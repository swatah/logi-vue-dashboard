import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './assets/layout/Layout'
import Dashboard from "./assets/Components/Dashboard.components/Dashboard.components";
import Live from "./assets/Components/Live.components/Live.components";
import TotalTruck from "./assets/Components/TruckFlow/TotalTrucks.TruckFLow.components";
import DockActivity from "./assets/Components/DockActivity.components/DockActivity.components";
import TruckTimeline from "./assets/Components/TruckTimeline.components/TruckTimeline.components";
import ForkliftPerformance from "./assets/Components/ForkliftPerformance.components/ForkliftPerformance.components";
import PalletEfficiency from "./assets/Components/PalletEfficiency.components/PalletEfficiency.components";
import LayoutAuth from "./assets/Auth/Layout.Auth";
import CameraConfig from "./assets/Components/CameraConfig.components/CameraConfig.componets";
import BayConfig from "./assets/Components/BayConfig.components/BayConfig.components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutAuth />, // Login/Signup toggle lives here
  },
  {
    path: "/Dashboard",
    element: <Layout />, // Contains Navbar, Sidebar, and Outlet
    children: [
      {
        index: "",
        element: <Dashboard />, // /dashboard
      },
      {
        path: "Live",
        element: <Live />,
      },
      {
        path: "TotalTrucks",
        element: <TotalTruck />,
      },
      {
        path: "DockActivity",
        element: <DockActivity />,
      },
      {
        path: "TruckTimeline",
        element: <TruckTimeline />,
      },
      {
        path: "ForkliftPerformance",
        element: <ForkliftPerformance />,
      },
      {
        path: "PalletEfficiency",
        element: <PalletEfficiency />,
      },
      {
        path:"CameraConfig",
        element:<CameraConfig/>
      },
      {
        path: "BayConfig",
        element: <BayConfig/>
      }
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
