import { products } from "@/store/data/temp/products";
import CategoriesNav from "./CategoriesNav";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="w-full">
      <CategoriesNav/>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;
