import styled from "@emotion/styled";
import Router from "next/router";
import { useState } from "react";

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
  cursor: pointer;
  font-weight: 700;
  font-size: 22px;
`;

export default function LayoutNavigation() {
  const [isCommunity, setIsCommunity] = useState(false);
  const [isMarket, setIsMarket] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const onClickList = () => {
    Router.push(`/01-01-board/list`);
    setIsCommunity(true);
    setIsMarket(false);
    setIsPinned(false);
  };

  const onClickMarket = () => {
    Router.push(`/01-01-market/home`);
    setIsCommunity(false);
    setIsMarket(true);
    setIsPinned(false);
  };

  const onClickPin = () => {
    Router.push(`/01-01-market/pin`);
    setIsCommunity(false);
    setIsMarket(false);
    setIsPinned(true);
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <Inner
          onClick={onClickList}
          style={{ color: isCommunity ? "white" : "black" }}
        >
          Community
        </Inner>
        {"  /  "}
        <Inner
          onClick={onClickMarket}
          style={{ color: isMarket ? "white" : "black" }}
        >
          Market
        </Inner>
        {"  /  "}
        <Inner
          onClick={onClickPin}
          style={{ color: isPinned ? "white" : "black" }}
        >
          Pinned
        </Inner>
      </InnerWrapper>
    </Wrapper>
  );
}
