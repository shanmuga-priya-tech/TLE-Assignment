import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Themecontext } from "../../context/ThemeContext";

function AppLayout() {
  const { theme } = useContext(Themecontext);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={`h-screen flex ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-200 text-black"
      }`}
    >
      {/* Sidebar: responsive behavior */}
      <div>
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setSidebarCollapsed}
        />
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
        />
      )}

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <header
          className={`sticky top-0 z-30 w-full  ${
            theme === "dark" ? "bg-slate-800" : "bg-slate-100"
          }`}
        >
          <div className="flex items-center justify-between max-w-full">
            {/* Toggle Sidebar on mobile */}
            <button
              className="md:hidden text-2xl font-bold"
              onClick={toggleSidebar}
            >
              ☰
            </button>

            {/* Header component grows to fill space */}
            <div className="flex-1">
              <Header />
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main
          className={`overflow-y-auto flex-1 px-4 md:px-14 pt-6 pb-24 ${
            theme === "dark"
              ? "bg-slate-950 text-white"
              : "bg-slate-200 text-black"
          }`}
        >
          <div className="max-w-[120rem] mx-auto flex flex-col gap-[3.2rem] ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
