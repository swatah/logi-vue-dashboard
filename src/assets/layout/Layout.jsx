import React from 'react'
import Navbar from './Navbar.layout'
import Sidebar from './Sidebar.layout'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="h-screen w-full bg-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 p-2">
        <div className="h-16 flex justify-center items-center py-0 rounded">
          <Navbar/>
        </div>
      </div>

      {/* Grid Layout Below Header */}
      <div className="pt-[5rem] h-[calc(100vh)] grid grid-cols-[15%_1fr] gap-4 p-2">
        {/* Sidebar */}
        <div className="h-full rounded bg-white p-2 shadow">
          <Sidebar/>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full rounded border bg-white border-gray-300 p-4 shadow hide-scrollbar">
          <div className="space-y-4">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}
