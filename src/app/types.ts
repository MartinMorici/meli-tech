export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type Author = {
  name: string;
  lastname: string;
};

export type SearchResult = {
  author: Author;
  categories: string[];
  items: Item[];
};
