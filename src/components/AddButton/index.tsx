import { AddButtonContainer } from "./style";
import { RiAddLine } from "react-icons/ri";
import { ReactNode } from "react";
import React from "react";

export interface IAddButton {
  children?: string | ReactNode;
  width?: string;
  height?: string;
}

const AddButton: React.FC<IAddButton> = ({
  children,
  width,
  height,
}): JSX.Element => {
  return (
    <AddButtonContainer width={width} height={height}>
      <RiAddLine className="add_icon" />
      {children}
    </AddButtonContainer>
  );
};

export default AddButton;
