import styled from "@emotion/styled";

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

export default function BasketPage() {
  const Basket = JSON.parse(localStorage.getItem("basket" || "[]"));
  console.log("=====Basket Check=====");
  console.log(Basket);

  return (
    <Wrapper>
      <Title>Your Cart</Title>
      {/* <div>{Basket}</div> */}
    </Wrapper>
  );
}
