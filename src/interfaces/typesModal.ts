export interface Product {
  name: string;
  description: string;
  size: string;
  stock: string;
  image_url: string;
  price: number;
}

export interface TypesModal {
  excelModalForm: boolean;
  setExcelModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void
}

export interface FormUploaderExcelProps {
  onClose: () => void;
  excelModalForm: boolean;
  readFileCsv: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  message: string;
}
