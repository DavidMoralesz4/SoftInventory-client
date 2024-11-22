export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  size: string;
  image_url: string;
}

export interface TypesModal {
  excelModalForm: boolean;
  setExcelModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  closeModalExcel: () => void;
}

// export interface TypesModalExcel {
//   closeModalExcel: () => void;
// }

export type ModalExcel = {
  excelModalForm: boolean;
  closeModalExcel: () => void;
};

export type PropsHandle = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
