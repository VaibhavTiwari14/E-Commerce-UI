import { Categories} from "@/store/types";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";

export const categories: Categories = [
  { name: "All", icon: ShoppingBasket, slug: "all" },
  { name: "T-shirts", icon: Shirt, slug: "t-shirts" },
  { name: "Shoes", icon: Footprints, slug: "shoes" },
  { name: "Accessories", icon: Glasses, slug: "accessories" },
  { name: "Bags", icon: Briefcase, slug: "bags" },
  { name: "Dresses", icon: Venus, slug: "dresses" },
  { name: "Jackets", icon: Shirt, slug: "jackets" },
  { name: "Gloves", icon: Hand, slug: "gloves" },
];
