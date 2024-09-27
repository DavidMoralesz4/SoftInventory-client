import { IProducts } from "@/interfaces/IProducts";
import axios from "axios";
import React from "react";
import Card from "./Card";
import AppModal from "@/components/modal/Modal";

// type ModalProps = {
//   open: boolean
//   close: () => void
//   setOpen: (value: boolean) => void
// }

export const fetchProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3005/api/products");
    return res.data as IProducts[];
  } catch (error) {
    console.log(error);
  }
};

// export const fetchCreateProducts = async () => {
//   try {
//     const res = await axios.post();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function Products() {
  const products = await fetchProducts();
  return (
    <div className="flex-col">
      <AppModal />
      <div className="flex mt-8 gap-7">
        {products?.map(({ description, image_url, name, price, stock, id }) => (
          <Card
            key={id}
            image_url={image_url}
            name={name}
            description={description}
            stock={stock}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
