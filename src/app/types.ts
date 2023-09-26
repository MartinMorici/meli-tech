export type Item = {
  id: string;
  title: string;
  currency_id?: string;
  thumbnail_id?: string;
  shipping?: {
    free_shipping?: boolean;
  };
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  sold_quantity: number;
  free_shipping?: boolean;
  description: string | null;
};

export type Author = {
  name: string;
  lastname: string;
};

export type Products = {
  author: Author;
  categories: string[];
  items: Item[];
};

export type Product = {
  author: Author;
  item : Item
};
