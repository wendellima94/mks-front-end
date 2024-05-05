import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "../products/interfaces/IProduct";

const Notification = styled(motion.div)`
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NotificationImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const NotificationText = styled.p`
  font-size: 14px;
  color: #333;
`;

const CloseButton = styled.button`
  top: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 20px;
`;

const CartNotification: React.FC<{
  product: Product;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ product, setIsOpen }) => {
  const [isOpen, setIsOpenLocal] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpenLocal(false);
        setIsOpen(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, setIsOpen]);

  const handleClose = () => {
    setIsOpenLocal(false);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Notification
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <NotificationImage src={product.photo} alt={product.name} />
          <NotificationText>
            {product.name} foi adicionado ao carrinho
          </NotificationText>
          <CloseButton onClick={handleClose}>x</CloseButton>
        </Notification>
      )}
    </AnimatePresence>
  );
};

export default CartNotification;
