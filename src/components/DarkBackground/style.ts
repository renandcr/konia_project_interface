import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const DarkBackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: ${VARIABLES.colorDarkBackground};
`;
