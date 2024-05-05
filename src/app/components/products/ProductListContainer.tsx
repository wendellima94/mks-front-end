"use client";
import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductList";
import { useProductsQuery } from "../../utils/api";
import SkeletonProductItem from "../skeleton-frame/Skeleton";

const ProductListContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: center;
    align-content: center; 
    margin: 0 !important;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: center;
    align-content: center; 
    margin: 0 !important;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-content: center;
    margin: 0 !important;
  }
`;

const ProductListContainer: React.FC = () => {
  const { data, isLoading } = useProductsQuery(1, 8, "id", "DESC");

  if (isLoading) {
    return (
      <ProductListContainerWrapper>
        {[...Array(8)].map((_, index) => (
          <SkeletonProductItem key={index} />
        ))}
      </ProductListContainerWrapper>
    );
  }

  return (
    <ProductListContainerWrapper>
      {data?.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListContainerWrapper>
  );
};

export default ProductListContainer;
