import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const ModalAddProductsContainer = styled.div`
  /* width: 400px;
  height: 300px;
  background-color: lightgray; */

  .modal_add {
    /* width: 400px; */
    /* height: 300px; */
    /* background-color: gray; */
    background-color: #ffffff;
    /* background-color: #f8f8f8; */

    display: flex;
    flex-direction: column;
    row-gap: 20px;
    /* align-items: center; */
    width: 100%;
    max-width: 400px;
    /* background-color: green; */
    /* padding-bottom: 1px; */
    /* border-radius: 0 0 4px 0; */
    position: fixed;
    z-index: 3;
    padding: 10px;
    margin-top: 100px;
    /* align-self: center; */
    border-radius: 4px;

    /* border: solid 1px red; */
  }

  .icon_close {
    font-size: 28px;
    cursor: pointer;
    :hover {
      opacity: 50%;
      transition: 0.5s;
    }
  }
  /* border: solid 1px red; */
`;

export const ModalAddProductsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: solid 1px green; */
  h1 {
    font-size: 22px;
    /* font-weight: 500; */
    line-height: 22px;
    color: ${VARIABLES.grayColor};

    /* @media only screen and (min-width: 425px) {
      font-size: 26px;
      line-height: 26px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 30px;
    } */
  }
`;
export const ModalAddProductsTextFieldContainer = styled.div`
  height: 42px;
  border-radius: 4px;
  input {
    border: none;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    background-color: #f8f8f8;
  }

  /* border: solid purple 1px; */
`;
