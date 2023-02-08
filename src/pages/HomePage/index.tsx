import ModalAddProducts from "../../components/ModalAddProducts";
import DarkBackground from "../../components/DarkBackground";
import InventoryBox from "../../components/InventoryBox";
import ProductCard from "../../components/ProductCard";
import AddButton from "../../components/AddButton";
import { useTypedSelector } from "../../modules";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import * as React from "react";

import {
  actionDbProducts,
  IDbProducts,
} from "../../modules/dbProducts/actions";

import {
  HomePageMainComponent,
  ProductListContainer,
  HomePageComponent,
  BoxOneContainer,
  BoxContainer,
} from "./style";

export interface IHomePage {
  width?: string;
}

const HomePage: React.FC = () => {
  const [displayModal, setDisplayModal] = React.useState(false);

  const dbProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.dbProducts
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .get("/product")
      .then((response) => dispatch(actionDbProducts(response.data)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <HomePageMainComponent>
      <DarkBackground displayModal={displayModal} />
      <ModalAddProducts
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <HomePageComponent>
        <h1>Itens do Inventário</h1>
        <AddButton setDisplayModal={setDisplayModal}>{"Novo item"}</AddButton>
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
        <ProductListContainer>
          {dbProducts.length > 0 &&
            dbProducts.map((current: IDbProducts) => (
              <ProductCard key={current.id} current={current} />
            ))}
        </ProductListContainer>
      </HomePageComponent>
    </HomePageMainComponent>
  );
};

export default HomePage;
