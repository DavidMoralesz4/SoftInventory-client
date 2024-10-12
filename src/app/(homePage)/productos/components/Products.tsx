"use client";
import axios from "axios";
import AppModal from "@/components/modal/Modal";
import { Image } from "antd";
import { useQuery } from "react-query";
import { Pagination, Table } from "antd";
import { TypesModal } from "@/interfaces/typesModal";
import { AppContext } from "@/context/modalContext";
import ButtonIU from "@/components/buttonIU/ButtonIU";
import { useContext } from "react";
import { IProducts } from "@/interfaces/IProducts";

export const fetchProducts = async () => {
  try {
    const res = await axios.get(
      "https://softinventory-back-production.up.railway.app/api/products"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletedProducts = async (_id: IProducts) => {
  try {
    const deleted = await axios.delete(
      `https://softinventory-back-production.up.railway.app/api/product/deleted/${_id}`
    );
    console.log(`Producto elminado ${deleted}`);
  } catch (error) {
    console.log(`Error al eliminar ${error}`);
  }
};

export default function Products() {
  const { data, isLoading, error } = useQuery("data", fetchProducts);
  const { setOpenModal, setExcelModalForm } = useContext(
    AppContext
  ) as TypesModal;

  const columns = [
    {
      title: "Producto",
      dataIndex: "image_url",
      key: "image_url",
      render: (image_url: string, name: string) => (
        <Image src={image_url} alt={name} width={60} height={60} />
      ),
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descripcion",
      dataIndex: "description",
      key: "description",
      render: (description: string) => <p>{description}</p>,
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "precie",
      render: (price: number) => <p>${price.toLocaleString()}</p>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Talla",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "",
      dataIndex: "deleted",
      key: "deleted",
      render: () => (
        <div>
          <p className="hover:text-red-500 cursor-pointer font-sans font-normal text-[17px]">X</p>
        </div>
      ),
    },
  ];

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar...</p>;

  return (
    <>
      <div className="flex-col gap-5 xl:flex justify-between pb-6">
        <div className="flex-row justify-center">
          <h1 className="text-3xl font-sans">Inventario de Productos</h1>
          <div className="flex gap-3">
            <ButtonIU onClick={() => setOpenModal(true)}>
              Crear un nuevo producto
            </ButtonIU>
            <ButtonIU onClick={() => setExcelModalForm(true)}>
              Subir un nuevo producto
            </ButtonIU>
          </div>
        </div>
        <div className="">
          <>
            <Table
              dataSource={data}
              columns={columns}
              // className="cursor-pointer"
              pagination={false}
            ></Table>
            <Pagination
              className="relative top-2"
              showSizeChanger
              defaultCurrent={1}
              total={100}
            />
          </>
        </div>
      </div>
      <AppModal />
    </>
  );
}
