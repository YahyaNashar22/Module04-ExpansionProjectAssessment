import React from "react";
import style from "./Products.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
function Products() {
  const data = [
    {
      id: 1,
      title: "product 1",
      category: "random",
      description: "la la la",
      price: "100$",
      supplier: "Merchant",
    },
    {
      id: 2,
      title: "product 2",
      category: "random",
      description: "la la la",
      price: "100$",
      supplier: "Merchant",
    },
    {
      id: 3,
      title: "product 3",
      category: "random",
      description: "la la la",
      price: "100$",
      supplier: "Merchant",
    },
    {
      id: 4,
      title: "product 4",
      category: "random",
      description: "la la la",
      price: "100$",
      supplier: "Merchant",
    },
    {
      id: 5,
      title: "product 5",
      category: "random",
      description: "la la la",
      price: "100$",
      supplier: "Merchant",
    },
    {
      id: 6,
      title: "product 6",
      category: "random",
      description: "la la la",
      price: "100$",
      supplier: "Merchant",
    },
    {
      id: 7,
      title: "product 7",
      category: "random",
      description: "la la la",
      price: "100$",
      supplier: "Merchant",
    },
  ];
  return (
    <section className={style.productsView}>
      {data.map((product, index) => {
        return (
          <ProductCard
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
            supplier={product.supplier}
          />
        );
      })}
    </section>
  );
}

export default Products;
