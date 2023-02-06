import InventoryBox from "../components/InventoryBox";
import AddButton from "../components/AddButton";

import {
  HomePageMainComponent,
  HomePageComponent,
  BoxOneContainer,
  BoxContainer,
} from "./style";

export interface IHomePage {
  width?: string;
}

const HomePage: React.FC<IHomePage> = (): JSX.Element => {
  return (
    <HomePageMainComponent>
      <HomePageComponent>
        <h1>Itens do inventário</h1>
        <AddButton>{"Novo item"}</AddButton>
        <BoxOneContainer>
          <BoxContainer width="15%">
            <InventoryBox>{"ID"}</InventoryBox>
          </BoxContainer>
          <BoxContainer width="55%">
            <InventoryBox>{"Nome do item"}</InventoryBox>
          </BoxContainer>
          <BoxContainer width="30%">
            <InventoryBox>{"Data de criação"}</InventoryBox>
          </BoxContainer>
        </BoxOneContainer>
      </HomePageComponent>
    </HomePageMainComponent>
  );
};

export default HomePage;
