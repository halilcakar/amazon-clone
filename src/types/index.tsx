export type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
};

export type State = {
  basket: ProductProps[];
  products: Array<ProductProps[]>;
  user: any;
};
export type Action = { type: string; item: ProductProps };
