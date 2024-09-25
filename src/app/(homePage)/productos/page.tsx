import React from "react";
import Products from "./components/Products";

export default function page() {
  return (
    <div className="flex gap-5">
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
    </div>
  );
}
