import React from "react";
import axios from "axios";
import TableOrder from "./TableOrder";

export const fetchOrders = async () => {
  try {
    const res = await axios.get(
      "https://softinventory-back-production.up.railway.app/api/order"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Table() {
  return (
    <div>
      <h1 className="font-sans text-3xl mb-4">Ordenes</h1>
      <TableOrder />
    </div>
  );
}
