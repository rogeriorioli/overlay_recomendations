import { Product } from "@/app/types/product";
import React from "react";

const ProductSumary = (props: Product) => {
  return (
    <div className="lg:w-1/3 flex flex-col justify-between p-2">
      <div>
        <h2 className="font-semibold text-lg text-gray-800">{props.name}</h2>
        <p className="my-2 font-light text-gray-700">{props.description}</p>
        <p className="text-orange-400 text-2xl font-semibold uppercase">
          R$ {props.price}
        </p>
      </div>
      <div className="">
        <button className="w-full bg-orange-400 transition-all hover:bg-orange-700 text-white uppercase font-semibold p-2 rounded-md">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductSumary;
