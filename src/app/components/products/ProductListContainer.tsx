"use client";
import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductList";
import { useProductsQuery } from "../../utils/api";
import { Spinner } from "../spinner";
import SkeletonProductItem from "../skeleton-frame/Skeleton";

const ProductListContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ProductListContainer: React.FC = () => {
  const { data, isLoading, isError } = useProductsQuery(1, 8, "id", "DESC");

  if (isLoading) {
    return (
      <ProductListContainerWrapper>
        {[...Array(8)].map((_, index) => (
          <SkeletonProductItem key={index} />
        ))}
      </ProductListContainerWrapper>
    );
  }

  if (isError) return <p>Ocorreu um erro ao carregar os produtos.</p>;

  return (
    <ProductListContainerWrapper>
      {data?.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListContainerWrapper>
  );
};

export default ProductListContainer;
