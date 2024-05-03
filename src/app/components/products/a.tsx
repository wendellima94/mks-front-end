import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ProductItemProps } from "./interfaces/IProduct";

const ProductCard = styled(motion.div)`
  width: 250.5px;
  height: 328px;
  gap: 0px;
  opacity: 0px;
  box-shadow: 0px 2px 8px 0px #00000022;
  background: #FFFFFF;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative; /* Adiciona posicionamento relativo ao card */
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  margin-top: 10px;
`;

const ProductName = styled.h3`
  margin: 0;
  flex: 1;
  word-break: break-word;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
`;

const ProductPrice = styled.div`
  width: 74px; 
  height: 30px
  font-size: 12px;
  text-align: center;
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
`;

const ProductButton = styled.button`
  width: 120px; /* Largura fixa */
  height: 40px; /* Altura fixa */
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const price = Number(product.price);
  const formattedPrice = price % 1 === 0 ? `R$ ${price.toFixed(0)}` : `R$ ${price.toFixed(2)}`;

  return (
    <ProductCard
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={product.photo}
        alt={product.name}
        style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
      />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formattedPrice}</ProductPrice>
      </ProductInfo>
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <ProductButton>Adicionar ao carrinho</ProductButton>
    </ProductCard>
  );
};

export default ProductItem;
