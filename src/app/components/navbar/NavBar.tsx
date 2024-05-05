"use client";
import React, { useState } from "react";
import Image from "next/image";
import CartSVG from "@/../public/Vector.svg";
import {
  CartItem,
  Logo,
  LogoImage,
  LogoItem,
  NavBarContainer,
  NavBarItens,
} from "./styles/NavBarStyle";
import { useShoppingCart } from "@/app/contexts/ShoppingCartContext.tsx";
import ShoppingCart from "../cart/ShoppingCart.tsx";

const NavBar: React.FC = () => {
  const { cartItems } = useShoppingCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <NavBarContainer>
      <LogoImage>
        <Logo>MKS</Logo>
        <LogoItem>Sistemas</LogoItem>
      </LogoImage>
      <NavBarItens onClick={toggleCart}>
        <Image src={CartSVG} alt="Icone de compras" width={19} height={18} />
        <CartItem>{cartItems.length}</CartItem>
      </NavBarItens>
      {isCartOpen && <ShoppingCart />}
    </NavBarContainer>
  );
};

export default NavBar;
