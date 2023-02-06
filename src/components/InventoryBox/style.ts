import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const InventoryBoxContainer = styled.div`
  width: 100%;
`;

export const InventoryBoxOneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  margin-bottom: 2px;
  background-color: ${VARIABLES.blueColor};
  h2 {
    font-size: 11px;
    line-height: 14px;
    color: #ffffff;

    @media only screen and (min-width: 375px) {
      font-size: 12px;
    }
    @media only screen and (min-width: 425px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 18px;
    }
  }

  @media only screen and (min-width: 425px) {
    padding: 9px;
  }
`;

export const InventoryBoxTwoContainer = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${VARIABLES.grayColor2};
`;
