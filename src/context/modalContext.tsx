"use client";

import { TypesModal } from "@/interfaces/typesModal";
import { createContext, useState } from "react";

type PropsChildren = {
  children: React.ReactNode;
};

export const AppContext = createContext<TypesModal | boolean>(false);

export const AppContextProvider = ({ children }: PropsChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [excelModalForm, setExcelModalForm] = useState<boolean>(false);
  
  const closeModalExcel = () => {
    setExcelModalForm(false);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        excelModalForm,
        setExcelModalForm,
        openModal,
        setOpenModal,
        onClose,
        closeModalExcel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
