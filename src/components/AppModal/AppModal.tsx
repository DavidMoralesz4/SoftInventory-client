import { AppContext } from "@/context/modalContext";
import { TypesModal } from "@/interfaces/typesModal";
import React, { useContext } from "react";
import ButtonIU from "../buttonIU/ButtonIU";
import FormUploaderExcel from "../form-uploader-excel/FormUploaderExcel";

// Este componente se encarga de mostrar el boton para abrir la modal

type Props = {
  readFileCsv: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AppModal({ readFileCsv }: Props) {
  const { excelModalForm, onClose, setExcelModalForm } = useContext(
    AppContext
  ) as TypesModal;

  return (
    <>
      <div>
        <ButtonIU onClick={() => setExcelModalForm(true)}>
          Subir productos
        </ButtonIU>
      </div>
      <FormUploaderExcel
        onClose={onClose}
        excelModalForm={excelModalForm}
        readFileCsv={readFileCsv}
      />
    </>
  );
}
