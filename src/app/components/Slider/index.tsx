/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";

import { Product } from "@/app/types/product";
import Image from "next/image";

import { useProductContext } from "@/app/context/useProduct";

type Slider = {
  products: Array<Product>;
};

const Slider = ({ products }: Slider) => {
  const { product, updateProduct } = useProductContext();

  const handleImageRef = (product: Product) => {
    updateProduct({
      image_url: product.image_url,
      name: product.name,
      id: product.id,
      price: product.price,
      description: product.description,
    });
  };
  return (
    <div className=" w-2/3 flex flex-row">
      <div className="w-[80px]">
        {products.map((item: Product) => (
          <div key={item.id} className="my-2">
            <button onClick={() => handleImageRef(item)}>
              <Image
                width={80}
                height={80}
                alt={item.name}
                src={item.image_url}
              />
            </button>
          </div>
        ))}
      </div>
      <div className="w-full m-2 transition ease-in-out delay-150 ">
        <Image
          src={`${product.image_url}`}
          alt={product.name}
          width={447}
          height={447}
        />
      </div>
    </div>
  );
};

export default Slider;
