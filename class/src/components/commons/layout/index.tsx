import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IProps {
  children: ReactChild;
}

const LayoutSidebar = styled.div`
  width: 300px;
  height: 1000px;
  background-color: #a0a0a0;
`;

const LayoutBody = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: #527da5;
  font-size: 70px;
  font-weight: 700;
`;

//Hiding Header in particular page
const HIDDEN_HEADERS = ["/12-06-modal-address-refactoring"];

export default function Layout(props: IProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  //asPath: 현재 내가 접속한 페이지
  return (
    <div>
      {isHiddenHeader && <LayoutHeader />}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar></LayoutSidebar>
        <LayoutBody>
          <Title>Inclass Practice</Title>
          {props.children}
        </LayoutBody>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}
