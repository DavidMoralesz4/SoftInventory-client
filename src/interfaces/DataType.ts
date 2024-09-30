export interface Client {
  _id: string;
  first_name: string;
  last_name: string;
  document: string;
  email: string;
  phone: number;
  address: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export interface Order {
  _id: string;
  client_id: Client;
  product_ids: Product[];
  status: string[];
  total: number;
  date_order: Date;
  __v: number;
}
