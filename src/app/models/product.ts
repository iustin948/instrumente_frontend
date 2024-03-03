export interface Product {
    id: number;
  title: string;
  description: string;
  price: number;
  photoUrl: String[];
  location: String;
  category: number;
  postedDate: Date | null;
  seller: string | null;
}
