import React from "react";
import { ProductItemProps } from "./interfaces/IProduct";
import {
  ProductButton,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "../styles/ProductStyle";

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const price = Number(product.price);
  const formattedPrice =
    price % 1 === 0 ? `R$ ${price.toFixed(0)}` : `R$ ${price.toFixed(2)}`;

  return (
    <>
      <ProductCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductImage src={product.photo} alt={product.name} />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{formattedPrice}</ProductPrice>
        </ProductInfo>
        <ProductDescription>
          <p>{product.brand}</p>
        </ProductDescription>
        <ProductDescription>
          <p>{product.description}</p>
        </ProductDescription>
        <ProductButton>Adicionar ao carrinho</ProductButton>
      </ProductCard>
    </>
  );
};

export default ProductItem;
