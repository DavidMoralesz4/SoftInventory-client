"use client";
import React, { useContext } from "react";
import ButtonIU from "../buttonIU/ButtonIU";
import FormProduct from "../form-create-product/FormProduct";
import { AppContext } from "@/context/modalContext";
import { TypesModal } from "@/interfaces/typesModal";

export const AppModal: React.FC = () => {
  const { openModal, setOpenModal, onClose } = useContext(
    AppContext
  ) as TypesModal;

  return (
    <>
    <div className="flex justify-between">
        <h1 className="text-2xl font-sans">Inventario de Productos</h1>
      <ButtonIU onClick={() => setOpenModal(true)}>
        Agregar productos al inventario
      </ButtonIU>
    </div>

      <FormProduct onClose={onClose} openModal={openModal} />
    </>
  );
};

export default AppModal;
