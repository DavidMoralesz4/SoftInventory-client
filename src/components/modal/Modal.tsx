"use client";
import React, { useContext } from "react";
import FormProduct from "../form-create-product/FormProduct";
import { AppContext } from "@/context/modalContext";
import { PropsHandle, TypesModal } from "@/interfaces/typesModal";
import FormUploaderExcel from "../form-uploader-excel/FormUploaderExcel";


export const AppModal = ({handleFileChange}: PropsHandle) => {
  const { openModal, onClose, excelModalForm, closeModalExcel } = useContext(
    AppContext
  ) as TypesModal;

  return (
    <>
      <FormProduct onClose={onClose} openModal={openModal} />
      <FormUploaderExcel
        excelModalForm={excelModalForm}
        closeModalExcel={closeModalExcel}
        handleFileChange={handleFileChange}
      />
    </>
  );
};

export default AppModal;
