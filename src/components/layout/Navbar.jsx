import React from "react";
import { useAppContext } from "../../hook/useAppContext.js";

const Navbar = () => {
  const { role, setRole } = useAppContext();

  return (
    <div className="w-full bg-white shadow-md px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between md:items-center gap-3 rounded-xl">
      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">Finance Dashboard</h2>
        <p className="text-xs text-gray-400">Track your finances smartly</p>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-3 py-1 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* Placeholder (no auth) */}
        <div className="text-xs text-gray-400 hidden md:block">Guest Mode</div>
      </div>
    </div>
  );
};

export default Navbar;
