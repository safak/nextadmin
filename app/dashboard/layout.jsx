import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

export default function Lauout({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        
        <Navbar />
        {children}
      </div>
    </div>
  );
}
