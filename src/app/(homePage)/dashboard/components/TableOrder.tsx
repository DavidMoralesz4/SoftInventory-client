"use client";
import { Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { fetchOrders } from "./Table";
import { Order } from "@/interfaces/DataType";

export default function TableOrder() {
  const [dataSources, setDataSource] = useState<Order[]>([]);

  useEffect(() => {
    const dataAxios = async () => {
      const order = await fetchOrders();
      setDataSource(order);
      console.log(order);
    };

    dataAxios();
  }, []);

  const handleStatusChange = (value: string, record: Order) => {
    console.log(
      `Nuevo estado: ${value}, para la orden: ${record.client_id.first_name}`
    );
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: ["client_id", "first_name"], // Utilizamos un array para acceder a campos anidados
      key: "first_name",
    },
    {
      title: "Correo",
      dataIndex: ["client_id", "email"], // Utilizamos un array para acceder a campos anidados
      key: "email",
    },
    {
      title: "Apellido",
      dataIndex: ["client_id", "last_name"],
      key: "last_name",
    },
    {
      title: "Documento",
      dataIndex: ["client_id", "document"],
      key: "document",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status: string[], record: Order) => (
        <Select
          value={status[0]} // Mostramos el primer valor por defecto
          onChange={(value) => handleStatusChange(value, record)}
          options={status.map((st) => ({ label: st, value: st }))} // Mapeamos los valores de status
        />
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total: number) => `$${total.toLocaleString()}`,
    },
    {
      title: "Fecha de Orden",
      dataIndex: "date_order",
      key: "date_order",
      render: (date_order: string) => new Date(date_order).toLocaleDateString(),
    },
  ];

  return <Table dataSource={dataSources} columns={columns}></Table>;
}
