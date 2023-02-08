import { DefaultButtonContainer } from "./style";

export interface IDefaultButton {
  children: string;
  height?: string;
  width?: string;
  onClick: () => void;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  children,
  height,
  width,
  ...rest
}) => {
  return (
    <DefaultButtonContainer height={height} width={width} {...rest}>
      {children}
    </DefaultButtonContainer>
  );
};

export default DefaultButton;
