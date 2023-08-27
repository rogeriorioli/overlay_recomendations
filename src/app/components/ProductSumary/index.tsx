import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Product } from "@/app/types/product";

const ProductSumary = (props: Product) => {
  return (
    <div className="lg:w-1/3 flex flex-col justify-between p-2">
      <div>
        <h2 className="font-semibold text-lg text-gray-800">{props.name}</h2>
        <p className="my-2 font-light text-gray-700">{props.description}</p>
        <p className="text-orange-400 text-3xl font-semibold uppercase">
          R$ {props.price}
        </p>
      </div>
      <div className="my-4">
        <button className=" flex justify-center items-center w-full bg-orange-400 transition-all hover:bg-orange-700 text-white uppercase font-semibold p-4 rounded-md">
          <ShoppingCartIcon width={24} />
          <span className="mx-2">add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductSumary;
