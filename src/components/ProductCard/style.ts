import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IProductCard } from ".";

export const ProductCardContainer = styled.li`
  display: flex;
  width: 100%;
  height: 35px;
  border-bottom: solid 2px ${VARIABLES.grayColor4};
`;

export const ProductCardListContainer = styled.p<IProductCard>`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 100%;
  background-color: ${VARIABLES.grayColor5};
  width: ${(props) => props.width};
  + p {
    border-left: solid 2px ${VARIABLES.grayColor4};
  }
  span {
    font-size: 11px;
    line-height: 18px;
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media only screen and (min-width: 375px) {
      font-size: 12px;
    }
    @media only screen and (min-width: 425px) {
      font-size: 13px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
