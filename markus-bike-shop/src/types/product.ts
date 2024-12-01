export interface Product {
  id: string;
  type: ProductType;
  product: any;
}

export type ProductType =
  | "bicycle"
  | "frame"
  | "wheel"
  | "rim"
  | "chain"
  | "finish";
