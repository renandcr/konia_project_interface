import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IDefaultButton } from ".";

export const DefaultButtonContainer = styled.button<IDefaultButton>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${VARIABLES.blueColor};
  font-size: 13px;
  padding: 8px;
  color: #ffffff;
  border-radius: 4px;
  :hover {
    filter: brightness(75%);
    transition: 0.5s;
  }
  :active {
    filter: brightness(1.6);
    transition: 0.3s;
  }
`;
