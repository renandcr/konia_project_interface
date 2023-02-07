import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const ModalAddProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .modal_add {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 130px;
    position: fixed;
    z-index: 3;
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;
    p {
      display: flex;
      align-items: center;
      align-self: flex-start;
      column-gap: 5px;
      font-size: 11px;
      color: red;
      margin-top: -12px;
    }
  }
  .icon_close {
    font-size: 32px;
    cursor: pointer;
    color: ${VARIABLES.grayColor3};
    :hover {
      opacity: 50%;
      transition: 0.5s;
    }
  }
`;

export const ModalAddProductsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 22px;
    line-height: 22px;
    color: ${VARIABLES.grayColor};
  }
`;

export const ModalAddProductsTextFieldContainer = styled.div`
  height: 42px;
  border-radius: 4px;
  input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border: none;
    background-color: #f8f8f8;
    outline-color: gray;
  }
`;
