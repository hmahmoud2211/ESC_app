export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Performance Sports Hijab",
    price: 29.99,
    image: "/images/products/product-1.jpg",
    category: "Hijabs",
    description: "Breathable sports hijab that stays in place during intense activities.",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Navy", "Gray"]
  },
  {
    id: 2,
    name: "Modest Swim Set",
    price: 89.99,
    image: "/images/products/product-2.jpg",
    category: "Swimwear",
    description: "Full coverage modest swimwear with UV protection.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Teal"]
  },
  {
    id: 3,
    name: "Athletic Fit Joggers",
    price: 49.99,
    image: "/images/products/product-3.jpg",
    category: "Bottoms",
    description: "Loose-fitting joggers designed for maximum comfort during workouts.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Olive"]
  },
  {
    id: 4,
    name: "Athletic Swim Set",
    price: 99.99,
    image: "/images/products/product-6.jpg",
    category: "Swimwear",
    description: "High-performance modest swimwear for serious athletes.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Blue", "Purple"]
  },
  {
    id: 5,
    name: "Loose-Fit Athletic Top",
    price: 39.99,
    image: "/images/products/product-5.jpg",
    category: "Tops",
    description: "Loose-fitting top for unrestricted movement during exercise.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Navy"]
  },
  {
    id: 6,
    name: "Modest Training Set",
    price: 119.99,
    image: "/images/products/product-4.jpg",
    category: "Sets",
    description: "Complete modest workout set including top, pants, and headcover.",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray"]
  },
  {
    id: 7,
    name: "High-Neck Training Top",
    price: 45.99,
    image: "/images/products/product-1.jpg",
    category: "Tops",
    description: "High neck training top with moisture-wicking fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Purple"]
  },
  {
    id: 8,
    name: "Breathable Athletic Pants",
    price: 59.99,
    image: "/images/products/product-3.jpg",
    category: "Bottoms",
    description: "Lightweight, breathable pants perfect for all types of exercise.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy"]
  }
];
