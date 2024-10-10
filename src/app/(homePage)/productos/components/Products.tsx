import { IProducts } from "@/interfaces/IProducts";
import axios from "axios";
import React from "react";
import Card from "./Card";
import AppModal from "@/components/modal/Modal";


export const fetchProducts = async () => {
  try {
    const res = await axios.get("https://softinventory-back-production.up.railway.app/api/products");
    return res.data as IProducts[];
  } catch (error) {
    console.log(error);
  }
};


export default async function Products() {
  const products = await fetchProducts();
  return (
    <div className="">
      <AppModal />
      <div className="grid grid-cols-2 mt-8 gap-7 w-auto sm:grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {products?.map(({ description, image_url, name, price, stock, id, talla}) => (
          <Card
            key={id}
            image_url={image_url}
            name={name}
            description={description}
            talla={talla}
            stock={stock}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
