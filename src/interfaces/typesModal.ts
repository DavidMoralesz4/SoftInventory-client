export interface TypesModal {
  openModal: boolean;
  excelModalForm: boolean;
  setExcelModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  closeModalExcel: () => void
}

// export interface TypesModalExcel {
//   closeModalExcel: () => void;
// }


export type ModalExcel = {
    excelModalForm: boolean
    closeModalExcel: () => void;
}

export type HandleCancel = {
    openModal: boolean;
    onClose: () => void;
  };