import { ReactChild } from "react";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IProps {
  children: ReactChild;
}

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const LayoutBody = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Layout(props: IProps) {
  const router = useRouter();
  console.log(router);

  const HIDDEN_HEADERS = ["/"];
  const HIDDEN_BANNERS = [
    "/",
    "/01-01-boars/signin",
    "/01-01-board/signup",
    "/01-01-board/new",
    "/01-01-market/create",
    "/01-01-market/list",
    `/01-01-market/mypage`,
    `/01-01-board/${router.query.boardDetail}/edit`,
    `/01-01-board/${router.query.productDetail}/edit`,
  ];
  const HIDDEN_NAVIGATION = ["/"];

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      {!isHiddenNavigation && <LayoutNavigation />}

      <BodyWrapper>
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
    </Wrapper>
  );
}
