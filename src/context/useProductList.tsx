import { Product } from "@/types";
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext<any>(null);

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productList, setProductList] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductList = (): {
  productList: Product[];
  handleChangeProductList: (newProductList: Product[]) => void;
} => {
  const { productList, setProductList } = useContext(ProductContext);

  const handleChangeProductList = (newProductList: Product[]) => {
    setProductList(newProductList);
    localStorage.setItem("productList", JSON.stringify(newProductList));
  };

  return {
    productList,
    handleChangeProductList,
  };
};

export { useProductList, ProductContextProvider };
