import styled from "@emotion/styled";
import Router from "next/router";

const Wrapper = styled.div`
  height: 60px;
  width: 100%;

  background-color: #9900ff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: black;
  font-size: 20px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 600px;
`;
const Inner = styled.div`
  font-family: Arial;

  cursor: pointer;
  font-weight: 700;
  :hover {
    color: white;
  }
  font-size: 22px;
`;

const onClickList = () => {
  Router.push(`/01-01-board/list`);
};

const onClickPost = () => {
  Router.push(`/01-01-board/new`);
};

const onClickMarket = () => {
  Router.push(`/01-01-market/home`);
};

export default function LayoutNavigation() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Inner onClick={onClickList}>Community</Inner>
        {"  /  "}
        <Inner onClick={onClickMarket}>Market</Inner>
        {"  /  "}
        <Inner onClick={onClickPost}>Post</Inner>
      </InnerWrapper>
    </Wrapper>
  );
}
