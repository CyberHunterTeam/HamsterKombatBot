export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  description: string | null;
  available: boolean | null;
  name: string | null;
};
