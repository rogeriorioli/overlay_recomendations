"use client";
import { useProductContext } from "@/app/context/useProduct";
import { Product } from "@/app/types/product";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ProductSumary from "../ProductSumary";
import Slider from "../Slider";
import Loading from "../Loading";

export default function Modal() {
  const { product, updateProduct } = useProductContext();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    await axios
      .get<Product[]>("/api/products")
      .then((success) => {
        const { data } = success;
        updateProduct({
          image_url: data[0].image_url,
          name: data[0].name,
          id: data[0].id,
          price: data[0].price,
          description: data[0].description,
        });
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[30px] h-[30px]">
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <div className="lg:w-[750px]  bg-gray-100 rounded-md shadow-md p-5">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row ">
          <Slider products={products} />
          <ProductSumary
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            price={product.price}
            description={product.description}
          />
        </div>
      </div>
    </div>
  );
}
