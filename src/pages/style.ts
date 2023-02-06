import { VARIABLES } from "../styles/global";
import styled from "styled-components";

export const HomePageMainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 50px 0 15px 0;
    line-height: 30px;
    font-size: 30px;
    font-weight: 500;
    color: ${VARIABLES.grayColor};
  }

  border: solid 1px pink;
`;

export const HomePageComponent = styled.section`
  display: flex;
  width: 90%;
  max-width: 900px;
  row-gap: 15px;

  border: solid 1px red;
`;

export const BoxOneContainer = styled.div`
  width: 15%;

  border: solid 1px green;
`;

export const BoxTwoContainer = styled.div`
  width: 55%;

  border: solid 1px black;
`;

export const BoxThreeContainer = styled.div`
  width: 30%;

  border: solid 1px black;
`;
