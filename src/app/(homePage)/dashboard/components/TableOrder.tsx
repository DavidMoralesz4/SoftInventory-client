"use client";
import { Pagination, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { fetchOrders } from "./Table";
import { Order } from "@/interfaces/DataType";
import axios from "axios";

export default function TableOrder() {
  const [dataSources, setDataSource] = useState<Order[]>([]);
  

  useEffect(() => {
    const dataAxios = async () => {
      const order = await fetchOrders();
      setDataSource(order);
    };

    dataAxios();
  }, []);

  const columns = [
    {
      title: "Nombre",
      dataIndex: ["client_id", "first_name"], // Utilizamos un array para acceder a campos anidados
      key: "first_name",
    },
    {
      title: "Apellido",
      dataIndex: ["client_id", "last_name"],
      key: "last_name",
    },
    {
      title: "Direccion",
      dataIndex: ["client_id", "address"], // Utilizamos un array para acceder a campos anidados
      key: "address",
    },
    {
      title: "Correo",
      dataIndex: ["client_id", "email"], // Utilizamos un array para acceder a campos anidados
      key: "email",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (record: Order) => (
        <Select
          placeholder={"Seleciona un Estado"}
          defaultActiveFirstOption
          onChange={(value) => handleStatusChange(value, record)}
          options={[
            {
              value: "Pendiente",
              label: "Pendiente",
            },
            {
              value: "Pago",
              label: "Pago",
            },
            {
              value: "Rechazado",
              label: "Rechazado",
            },
          ]}
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

  const handleStatusChange = async (value: string, record: Order) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/order/update/${record._id}`, // Usar el ID de la orden en la URL
        { status: value } // Enviar el status en el cuerpo
      );

      console.log(`Success: ${res.data} for ${record.client_id.first_name}`);
    } catch (error: unknown) {
      // error: unknown no me permite acceder directamente a las propiedades "error.message" sin primero verificar que el obj tiene esa property!
      if (error instanceof Error) {
        console.error("Error al actualizar el status:", error.message);
      } else {
        console.error("Error desconocido", error);
      }
    }
  };

  return (
    <>
      <Table
        dataSource={dataSources}
        columns={columns}
        className="cursor-pointer"
        pagination={false}
      ></Table>
      <Pagination
        className="relative top-2"
        showSizeChanger
        defaultCurrent={1}
        total={100}
      />
    </>
  );
}
