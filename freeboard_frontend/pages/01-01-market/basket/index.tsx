import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;

  margin: 100px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Product = styled.div`
  font-size: 20px;
`;

export default function BasketPage() {
  const [baskets, setBaskets] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Basket = JSON.parse(localStorage.getItem("basket" || "[]"));
      console.log("=====Basket Check=====");
      setBaskets(Basket);
    }
  }, []);

  console.log(baskets);

  const router = useRouter();

  const onClickDetail = (event) => {
    router.push(`/01-01-market/${event.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <ProductWrapper>
        {baskets &&
          baskets.map((el) => (
            <Product id={el.fetchUseditem._id} onClick={onClickDetail}>
              {el.fetchUseditem?.name}
            </Product>
          ))}
      </ProductWrapper>
    </Wrapper>
  );
}
