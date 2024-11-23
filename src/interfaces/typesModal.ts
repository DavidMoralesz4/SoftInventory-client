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
  onClose: () => void
}

export type HandleCancel = {
  onClose: () => void
  excelModalForm: boolean;
  readFileCsv: (event: React.ChangeEvent<HTMLInputElement>) => void
}
