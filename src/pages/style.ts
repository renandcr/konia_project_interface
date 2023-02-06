import { VARIABLES } from "../styles/global";
import styled from "styled-components";
import { IHomePage } from ".";

export const HomePageMainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageComponent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  row-gap: 13px;
  width: 98%;
  max-width: 900px;
  h1 {
    font-size: 22px;
    line-height: 22px;
    color: ${VARIABLES.grayColor};

    @media only screen and (min-width: 425px) {
      font-size: 26px;
      line-height: 26px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 28px;
    }
  }
`;

export const BoxOneContainer = styled.div`
  display: flex;
  column-gap: 2px;
  width: 100%;
`;

export const BoxContainer = styled.div<IHomePage>`
  width: ${(props) => props.width};
`;
