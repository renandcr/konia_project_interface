import { AddButtonContainer } from "./style";
import { RiAddLine } from "react-icons/ri";
import React from "react";

export interface IAddButton {
  setDisplayModal: React.Dispatch<boolean>;
  children?: string | React.ReactNode;
  height?: string;
  width?: string;
}

const AddButton: React.FC<IAddButton> = ({
  setDisplayModal,
  children,
  height,
  width,
}) => {
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
