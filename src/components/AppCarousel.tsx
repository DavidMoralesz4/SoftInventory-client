import Products from "@/app/(homePage)/productos/components/Products";
import { Carousel } from "antd";
import React from "react";

export default function AppCarousel() {
  return (
    <>
      <h1 className="text-2xl  font-sans"> Inventario de productos</h1>
      <Carousel autoplay className="p-2">
        <div className="text-black">
          <div className="flex justify-center gap-4">
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </Carousel>
    </>
  );
}
