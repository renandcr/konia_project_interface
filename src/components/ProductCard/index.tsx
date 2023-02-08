import { ProductCardContainer, ProductCardListContainer } from "./style";
import { IDbProducts } from "../../modules/dbProducts/actions";
import { dateHandler } from "../../assets/methods";
import * as React from "react";

export interface IProductCard {
  width?: string;
}

const ProductCard: React.FC<{ current: IDbProducts }> = ({ current }) => {
  return (
    <ProductCardContainer>
      <ProductCardListContainer width="15%">
        <span>{current.id}</span>
      </ProductCardListContainer>
      <ProductCardListContainer width="55%">
        <span>{current.name}</span>
      </ProductCardListContainer>
      <ProductCardListContainer width="30%">
        <span>{dateHandler(new Date(current.created_at))}</span>
      </ProductCardListContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
