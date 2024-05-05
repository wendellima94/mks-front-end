import styled from "styled-components";
import { motion } from "framer-motion";

export const CartContainer = styled(motion.div)`
  width: 100%;
  max-width: 486px;
  height: 100%;
  max-height: auto;
  background: #0f52ba;
  border-left: 1px solid #ccc;
  position: fixed;
  overflow: scroll;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  border: none;
  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;

  @media (max-width: 768px) {
    width: 85%;
    height: 100%;
    max-height: auto;
    overflow: scroll;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 30px;
  margin: 10px 0 50px 0;
`;

export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  max-width: 470px;
  height: auto;
  
  bottom: 0;
  z-index: 1000;
  background: #0f52ba;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 50px;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;

`;

export const FinishSale = styled.div`

display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 81px;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  background: #000;
  color: #ffffff;
  display: flex;
  margin: 20px 0 0 0;
  cursor: pointer;
`;

export const CartTitle = styled.h2`
  color: #ffffff;
  font-family: Montserrat;
  font-size: 27px;
  font-weight: 700;
  line-height: 32.91px;
  white-space: pre-line;
`;

export const CartItem = styled.div`
  width: 385px;
  background-color: #000;
  height: 101px;
  top: 6px;
  z-index: 3;
  background: #ffffff;
  box-shadow: -2px 2px 10px 0px #0000000d;
  border-radius: 8px;
  align-items: center;
  display: grid;
  grid-template-columns: auto 2fr 3fr;
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

export const CloseItemButton = styled.span`
  width: 18px;
  height: 18px;
  top: -5px;
  right: -6px;
  position: absolute;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  border-radius: 50%;
  color: #ffffff;
  z-index: 1;
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    font-size: 40px;
    color: #000;
    background: transparent;
    border-radius: none;
  }
`;

export const CartPriceAndControls = styled.div`
  display: flex;
  justify-content: space-evenly;
  aign-items: center;
  text-align: center;
  line-height: 30px;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 10px;
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
`;

export const CartItemName = styled.p`
  font-size: 16px;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const QuantityControl = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  padding: 4px 4px;

  @media (max-width: 768px) {
    width: 80px;
    height: 34px;
  }
`;
export const QuantityInput = styled.input`
  width: 20px;
  height: 19px;
  top: 44px;
  text-align: center;
  border: 1px solid #bfbfbf;
  border-left: 1px solid #bfbfbf;
  border-top: none;
  border-bottom: none;

  @media (max-width: 768px) {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  width: 25px;
  border: none;
  text-align: center;
`;

export const CartItemPrice = styled.p`
  width: 62px;
  height: 17px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    width: 84px;
    height: 34px;
    border-radius: 5px;
    background: #373737;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 38px;
  height: 38px;
  background: #000000;
  border-radius: 50%;
  color: #ffffff;
  font-size: 22px;
  line-height: 15px;
  @media (max-width: 768px) {
    color: #0f52ba;
    width: 46px;
    height: 46px;
    font-size: 22px;
  }
`;
