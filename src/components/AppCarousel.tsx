
import { Carousel } from "antd";
import React from "react";

export default async function AppCarousel() {
  // const product  = await fetchProducts()

  return (
    <>
      <h1 className="text-2xl  font-sans"> Inventario de productos</h1>
      <Carousel autoplay className="p-2">
        <div className="text-black">
          <div className="flex justify-center gap-4">

          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            
          </div>
        </div>
      </Carousel>
    </>
  );
}
