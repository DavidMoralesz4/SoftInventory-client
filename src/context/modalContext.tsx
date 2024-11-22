"use client";

import { TypesModal } from "@/interfaces/typesModal";
import { createContext, useState } from "react";

type PropsChildren = {
  children: React.ReactNode;
};

export const AppContext = createContext<TypesModal | boolean>(false);

export const AppContextProvider = ({ children }: PropsChildren) => {
  const [excelModalForm, setExcelModalForm] = useState<boolean>(false);

  const closeModalExcel = () => {
    setExcelModalForm(false);
  };

  return (
    <AppContext.Provider
      value={{
        excelModalForm,
        setExcelModalForm,
        closeModalExcel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
