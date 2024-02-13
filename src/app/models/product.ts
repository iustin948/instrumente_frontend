export interface Product {
    id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  postedDate: Date | null;
  seller: string | null;
}
