export interface Product {
  id: string;
  type: ProductType;
  product: any;
}

export interface Part<T extends string> {
  type: T;
  name?: string;
  price: number;
}

export type ProductType =
  | "bicycle"
  | "frame"
  | "wheel"
  | "rim"
  | "chain"
  | "finish";
