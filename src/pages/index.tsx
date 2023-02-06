import {
  HomePageMainComponent,
  BoxThreeContainer,
  HomePageComponent,
  BoxOneContainer,
  BoxTwoContainer,
} from "./style";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <HomePageMainComponent>
      <h1>Itens do inventário</h1>
      <HomePageComponent>
        <BoxOneContainer></BoxOneContainer>
        <BoxTwoContainer></BoxTwoContainer>
        <BoxThreeContainer></BoxThreeContainer>
      </HomePageComponent>
    </HomePageMainComponent>
  );
};

export default HomePage;
