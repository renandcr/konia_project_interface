import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IHomePage } from ".";

export const HomePageMainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const HomePageComponent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  width: 98%;
  max-width: 900px;
  h1 {
    font-size: 22px;
    line-height: 22px;
    color: ${VARIABLES.grayColor};
    margin-bottom: 10px;

    @media only screen and (min-width: 425px) {
      font-size: 26px;
      line-height: 26px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 28px;
    }
  }
  button {
    margin-bottom: 10px;
  }
`;

export const BoxOneContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;
`;

export const BoxContainer = styled.div<IHomePage>`
  width: ${(props) => props.width};
  + div {
    border-left: solid 2px ${VARIABLES.grayColor4};
  }
`;

export const ProductListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 210px;
  background-color: ${VARIABLES.grayColor2};
`;
