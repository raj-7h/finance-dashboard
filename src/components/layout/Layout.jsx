import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { transactions as data } from "../../data/transactions";

const Layout = () => {
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(data);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen">
        <Navbar role={role} setRole={setRole} />

        <main className="p-4 md:p-6 bg-gray-100 flex-1 overflow-y-auto">
          <Outlet context={{ role, transactions, setTransactions }} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
