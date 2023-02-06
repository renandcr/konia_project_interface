import InventoryBox from "../components/InventoryBox";

import {
  HomePageMainComponent,
  HomePageComponent,
  BoxContainer,
} from "./style";

export interface IHomePage {
  width?: string;
}

const HomePage: React.FC<IHomePage> = (): JSX.Element => {
  return (
    <HomePageMainComponent>
      <h1>Itens do inventário</h1>
      <HomePageComponent>
        <BoxContainer width="15%">
          <InventoryBox>{"ID"}</InventoryBox>
        </BoxContainer>
        <BoxContainer width="55%">
          <InventoryBox>{"Nome do item"}</InventoryBox>
        </BoxContainer>
        <BoxContainer width="30%">
          <InventoryBox>{"Data de criação"}</InventoryBox>
        </BoxContainer>
      </HomePageComponent>
    </HomePageMainComponent>
  );
};

export default HomePage;
