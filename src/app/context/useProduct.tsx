"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";
import { Product } from "../types/product";

interface ProductContextType {
  product: Product;
  updateProduct: (newProduct: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    image_url: "",
    price: 0,
    description: "",
  });

  const updateProduct = (newProduct: Product) => {
    setProduct(newProduct);
  };

  const contextValue: ProductContextType = {
    product,
    updateProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
