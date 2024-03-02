export interface Product {
    id: number;
  title: string;
  description: string;
  price: number;
  category: number;
  postedDate: Date | null;
  seller: string | null;
}
