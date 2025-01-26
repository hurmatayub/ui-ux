"use client";
import Image from "next/image";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // Track the active tab
  const [sidebarOpen, setSidebarOpen] = useState(false); // Toggle sidebar for small screens

  return (
    <div className="flex w-full min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-[286px] bg-white border-r border-gray-200 p-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0`}
      >
        {/* Close Button (Small Screens Only) */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-500 md:hidden"
        >
          ✕
        </button>

        {/* Sidebar Content */}
        <div>
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 mb-6">MORENT</h1>

          {/* Main Menu */}
          <p className="text-sm text-gray-500 mb-4">MAIN MENU</p>
          {[
            { name: "dashboard", label: "Dashboard", icon: "/home.png" },
            { name: "carRent", label: "Car Rent", icon: "/car.png" },
            { name: "insight", label: "Insight", icon: "/chart.png" },
            { name: "reimburse", label: "Reimburse", icon: "/wallet.png" },
            { name: "inbox", label: "Inbox", icon: "/message.png" },
            { name: "calendar", label: "Calendar", icon: "/calendar.png" },
          ].map((menu) => (
            <div
              key={menu.name}
              onClick={() => setActiveTab(menu.name)}
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer mb-2 ${
                activeTab === menu.name
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Image
                src={menu.icon}
                alt={menu.label}
                width={24}
                height={24}
                className="invert"
              />
              <span className="font-medium">{menu.label}</span>
            </div>
          ))}

          {/* Preferences */}
          <p className="text-sm text-gray-500 mt-10 mb-4">PREFERENCES</p>
          {[
            { name: "settings", label: "Settings", icon: "/setting.png" },
            { name: "help", label: "Help & Center", icon: "/help.png" },
            { name: "darkMode", label: "Dark Mode", icon: "/dark.png" },
            { name: "logout", label: "Logout", icon: "/logout.png" },
          ].map((menu) => (
            <div
              key={menu.label}
              onClick={() => setActiveTab(menu.label)}
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer mb-2 ${
                activeTab === menu.label
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Image
                src={menu.icon}
                alt={menu.label}
                width={24}
                height={24}
                className="invert"
              />
              <span className="font-medium">{menu.label}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay for Sidebar on Small Screens */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex items-center justify-between">
          {/* Hamburger Menu for Small Screens */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-gray-500"
          >
            ☰
          </button>
        </div>
        {/* <Navbar /> */}
        {/* Main Section */}
        {/* Your main content here */}
      </main>
    </div>
  );
};

export default Dashboard;
