import {
  InventoryBoxTwoContainer,
  InventoryBoxOneContainer,
  InventoryBoxContainer,
} from "./style";

export interface IInventoryBox {
  children: string;
}

const InventoryBox: React.FC<IInventoryBox> = ({ children }): JSX.Element => {
  return (
    <InventoryBoxContainer>
      <InventoryBoxOneContainer>
        <h2>{children}</h2>
      </InventoryBoxOneContainer>
      <InventoryBoxTwoContainer />
    </InventoryBoxContainer>
  );
};

export default InventoryBox;
