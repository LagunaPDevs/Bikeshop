export interface Product {
  id: string;
  productType: ProductType;
}

export type ProductType = "bicycle" | "frame" | "wheel" | "rim";
