import { DarkBackgroundContainer } from "./style";

export interface IDarkBackground {
  displayModal: boolean;
}

const DarkBackground: React.FC<IDarkBackground> = ({ displayModal }) => {
  return <>{displayModal && <DarkBackgroundContainer />}</>;
};

export default DarkBackground;
