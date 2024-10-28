export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  size: string;
  image_url: string;
}


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
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type HandleCancel = {
    openModal: boolean;
    onClose: () => void;
  };

export type PropsHandle = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}