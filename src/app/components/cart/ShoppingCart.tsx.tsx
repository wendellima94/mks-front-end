import React, { useState } from "react";
import { useShoppingCart } from "@/app/contexts/ShoppingCartContext.tsx";
import {
  CartContainer,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  CartItemPrice,
  CartPriceAndControls,
  CartTitle,
  CloseButton,
  CloseItemButton,
  FinishSale,
  Footer,
  Header,
  QuantityButton,
  QuantityControl,
  QuantityInput,
  TotalPrice,
} from "./styles/ShoppingCart.tsxStyle";

const ShoppingCart: React.FC = () => {
  const { cartItems, cartTotal, removeFromCart, setCartItems } =
    useShoppingCart();
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );

    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity === 0) {
      removeFromCart(itemId);
    }
  };

  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleQuantityChange = (itemId: number, newQuantity: string) => {
    const quantity = parseInt(newQuantity);
    if (!isNaN(quantity) && quantity >= 0) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  return (
    <>
      {isOpen && (
        <CartContainer>
          <Header>
            <CartTitle>Carrinho{"\n"}de Compras</CartTitle>
            <CloseButton onClick={handleCloseCart}>X</CloseButton>
          </Header>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CloseItemButton onClick={() => removeFromCart(item.id)}>
                X
              </CloseItemButton>
              <CartItemInfo>
                <CartItemImage src={item.photo} alt={item.name} />
              </CartItemInfo>
              <CartItemName>{item.name}</CartItemName>
              <CartPriceAndControls>
                <QuantityControl>
                  <QuantityButton
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </QuantityButton>
                  <QuantityInput
                    type="string"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                  <QuantityButton
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </QuantityButton>
                </QuantityControl>
                <CartItemPrice>R${Number(item.price)}</CartItemPrice>
              </CartPriceAndControls>
            </CartItem>
          ))}
          <Footer>
            <TotalPrice>
              <span>Total:</span>
              <span>R$ {cartTotal}</span>
            </TotalPrice>
            <FinishSale>
              <p>Finalizar Compra</p>{" "}
            </FinishSale>
          </Footer>
        </CartContainer>
      )}
    </>
  );
};

export default ShoppingCart;
