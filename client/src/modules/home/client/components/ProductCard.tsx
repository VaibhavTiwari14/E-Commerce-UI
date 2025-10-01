"use client";

import { ProductType } from "@/store/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={product.images[selectedColor]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-3 flex flex-col gap-3">
        {/* Title & Description */}
        <div className="space-y-1">
          <h3 className="font-medium text-gray-900 text-sm line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[10px] text-gray-500 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Size & Color */}
        <div className="flex gap-3 text-xs">
          {/* Size Selector */}
          <div className="flex flex-col gap-1 flex-1 relative">
            <span className="text-gray-600 font-medium uppercase">Size</span>
            <div className="relative">
              <select
                name="size"
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="appearance-none w-full bg-gray-50 border border-gray-300 rounded-lg px-2 py-1 pr-8 text-xs font-medium text-gray-800 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 cursor-pointer transition-all duration-200"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size} className="uppercase">
                    {size}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Color Selector */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase text-[10px]">Color</span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((col) => (
                <button
                  key={col}
                  onClick={() => setSelectedColor(col)}
                  className={`w-4 h-4 rounded-full border transition-all duration-200 ${
                    selectedColor === col
                      ? "ring-2 ring-black ring-offset-1"
                      : "border-gray-300 hover:ring-gray-400"
                  }`}
                  style={{ backgroundColor: col }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-2">
          <p className="font-semibold text-sm text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <button className="px-3 py-1 text-xs font-medium rounded-md border border-gray-200 shadow-sm transition-all duration-200 hover:bg-black hover:text-white active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
