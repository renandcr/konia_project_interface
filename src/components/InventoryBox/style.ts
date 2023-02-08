import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const InventoryBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: ${VARIABLES.blueColor};
  min-height: 34px;
  h2 {
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media only screen and (min-width: 425px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 17px;
    }
  }

  @media only screen and (min-width: 425px) {
    padding: 9px;
  }
`;
