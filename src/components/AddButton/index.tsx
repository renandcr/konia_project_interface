import { AddButtonContainer } from "./style";
import { ReactNode, Dispatch } from "react";
import { RiAddLine } from "react-icons/ri";
import React from "react";

export interface IAddButton {
  setDisplayModal: Dispatch<boolean>;
  children?: string | ReactNode;
  height?: string;
  width?: string;
}

const AddButton: React.FC<IAddButton> = ({
  setDisplayModal,
  children,
  height,
  width,
}): JSX.Element => {
  return (
    <AddButtonContainer
      setDisplayModal={setDisplayModal}
      height={height}
      width={width}
      onClick={() => setDisplayModal(true)}
    >
      <RiAddLine className="add_icon" />
      {children}
    </AddButtonContainer>
  );
};

export default AddButton;
