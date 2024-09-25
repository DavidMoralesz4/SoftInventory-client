import React from "react";

export default function AppFooter() {
  return (
    <div className="text-white text-[12px] flex justify-between font-sans">
      SoftInventory ©{new Date().getFullYear()} Created by EasySolutionPro
    </div>
  );
}
