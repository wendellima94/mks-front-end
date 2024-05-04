"use client";
import React from "react";
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

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <LogoImage>
        <Logo>MKS</Logo>
        <LogoItem>Sistemas</LogoItem>
      </LogoImage>
      <NavBarItens>
        <Image src={CartSVG} alt="Icone de compras" width={19} height={18} />
        <CartItem>0</CartItem>
      </NavBarItens>
    </NavBarContainer>
  );
};

export default NavBar;
