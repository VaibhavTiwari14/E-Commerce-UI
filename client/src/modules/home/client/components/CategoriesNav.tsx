"use client"

import React from 'react';
import { categories } from '@/store/data/temp/categories';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CategoriesNav = () => {

    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get("category");
    const router = useRouter();
    const pathName = usePathname()

    const handleChange = (slug : string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", slug || "all");
        router.push(`${pathName}?${params.toString()}`,{scroll: false});
    }


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${category.slug === selectedCategory ? "bg-white" : "text-gray-500"}`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {<category.icon className="w-4 h-4" />}
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default CategoriesNav
