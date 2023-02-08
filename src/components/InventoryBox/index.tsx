import { InventoryBoxContainer } from "./style";

export interface IInventoryBox {
  children: string;
}

const InventoryBox: React.FC<IInventoryBox> = ({ children }) => {
  return (
    <InventoryBoxContainer>
      <h2>{children}</h2>
    </InventoryBoxContainer>
  );
};

export default InventoryBox;
