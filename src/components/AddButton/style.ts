import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IAddButton } from ".";

export const AddButtonContainer = styled.button<IAddButton>`
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding: 6px 13px 6px 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 10px;
  border-radius: 14px;
  background-color: ${VARIABLES.blueColor};
  color: #ffffff;
  :hover {
    filter: brightness(75%);
    transition: 0.5s;
  }
  :active {
    filter: brightness(1.6);
    transition: 0.3s;
  }
  .add_icon {
    font-size: larger;
  }

  @media only screen and (min-width: 425px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 13px;
  }
`;
