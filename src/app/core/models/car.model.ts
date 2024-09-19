export interface Car {
  id?: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  initial?: number;
  url: string;
  vin?: string;
  evaluation?: string;
  img_url?: string;
  status?: string;
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
  delededAt?: Date;
}
