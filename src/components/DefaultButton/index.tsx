import { DefaultButtonContainer } from "./style";

export interface IDefaultButton {
  children: string;
  height?: string;
  width?: string;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  children,
  height,
  width,
}): JSX.Element => {
  return (
    <DefaultButtonContainer height={height} width={width}>
      {children}
    </DefaultButtonContainer>
  );
};

export default DefaultButton;
