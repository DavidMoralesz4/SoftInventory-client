"use client";
import React, { useContext } from "react";
import ButtonIU from "../buttonIU/ButtonIU";
import FormProduct from "../form-create-product/FormProduct";
import { AppContext } from "@/context/modalContext";
import { TypesModal } from "@/interfaces/typesModal";
import FormUploaderExcel from "../form-uploader-excel/FormUploaderExcel";

export const AppModal: React.FC = () => {
  const { openModal, setOpenModal, onClose, setExcelModalForm, excelModalForm, closeModalExcel} = useContext(
    AppContext
  ) as TypesModal;

  return (
    <>
      <div className="flex-row gap-5 xl:flex justify-between pb-6">
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

      <FormProduct onClose={onClose} openModal={openModal} />
      <FormUploaderExcel excelModalForm={excelModalForm} closeModalExcel={closeModalExcel}/>
    </>
  );
};

export default AppModal;
