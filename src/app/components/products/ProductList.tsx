import React, { useState } from "react";
import { useShoppingCart } from "@/app/contexts/ShoppingCartContext.tsx";
import CartNotification from "../notifications/CartAddNotification";
import { ProductItemProps } from "./interfaces/IProduct";
import {
  ButtomText,
  ProductButton,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./styles/ProductStyle";
import Image from "next/image";
import SaleIcon from "@/../public/cart.svg";

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart } = useShoppingCart(); 
  const [notificationVisible, setNotificationVisible] = useState(false);

  const price = Number(product.price);
  const formattedPrice =
    price % 1 === 0 ? `R$ ${price.toFixed(0)}` : `R$ ${price.toFixed(2)}`;

  const handleAddToCart = () => {
    addToCart(product);
    setNotificationVisible(true);

    const savedCartItems = localStorage.getItem("cartItems");
    const updatedCartItems = savedCartItems
      ? JSON.parse(savedCartItems)
      : [];
    const updatedCartItem = {
      ...product,
      quantity: 1
    };
    localStorage.setItem("cartItems", JSON.stringify([...updatedCartItems, updatedCartItem]));
  };

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
        <ProductButton onClick={handleAddToCart}>
          <Image
            src={SaleIcon}
            alt="Icone carrinho compras"
            width={18}
            height={18}
          />
          <ButtomText>COMPRAR</ButtomText>
        </ProductButton>
      </ProductCard>
      {notificationVisible && (
        <CartNotification
          product={product}
          setIsOpen={setNotificationVisible}
        />
      )}
    </>
  );
};

export default ProductItem;
