import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100vw;
  height: 101px;
  background: #0f52ba;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

  }
`;

export const LogoImage = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Logo = styled.p`
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  color: #fff;
`;

export const LogoItem = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin: 0 4px;
  color: #fff;
`;

export const NavBarItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background: #ffffff;
  padding: 0 8x1px;
`;

export const CartItem = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.94px;

  text-align: left;
`;
