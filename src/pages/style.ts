import { VARIABLES } from "../styles/global";
import styled from "styled-components";
import { IHomePage } from ".";

export const HomePageMainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 50px 0 15px 0;
    font-size: 22px;
    line-height: 22px;
    color: ${VARIABLES.grayColor};

    @media only screen and (min-width: 425px) {
      font-size: 26px;
      line-height: 26px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const HomePageComponent = styled.section`
  display: flex;
  column-gap: 2px;
  width: 98%;
  max-width: 900px;
`;

export const BoxContainer = styled.div<IHomePage>`
  width: ${(props) => props.width};
`;
