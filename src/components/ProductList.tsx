import styled from "styled-components";
import { IProduct } from "../types/Product";
import Product from "./Product";

interface Props {
  products: IProduct[];
}

function productList({ products }: Props) {
  return (
    <Container>
      {products.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </Container>
  );
}

export default productList;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 80px;
`;
