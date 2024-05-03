import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductCard = styled(motion.div)`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  width: 251px;
  height: 328px;
  position: relative;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 160px;
  width: 100%;
  object-fit: contain;
  object-position: top center;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: top;
  margin-top: 10px;
  color: #2c2c2c;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

export const ProductName = styled.h3`
  margin: 0;
  flex: 1;
  word-break: break-word;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

export const ProductPrice = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #373737;
  color: white;
  width: 74px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

export const ProductButton = styled.button`
  font-size: 14px;
  background-color: #0f52ba;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 218px;
  height: 31.91px;
  gap: 0px;
  border-radius: 0px 0px 8px 8px;
  opacity: 0px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  &:hover {
    transform: scale(1.01);
    background-color: #0f51b9;
  }
  transition: transform 0.2s ease;
`;

export const ProductDescription = styled.div`
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  text-align: left;
  color: #2c2c2c;
  margin: 8px 0;
`;
