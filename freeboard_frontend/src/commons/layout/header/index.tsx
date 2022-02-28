import styled from "@emotion/styled";
import Router, { useRouter } from "next/router";
import { Modal, Tooltip } from "antd";
import { RiAliensLine, RiUser5Line } from "react-icons/ri";
import { AiTwotoneExperiment } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { Menu, Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const Wrapper = styled.div`
  height: 120px;
  width: 100%;

  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 80px;
  color: #9900ff;
  font-family: Impact;
  padding-left: 170px;

  width: 700px;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: absolute;
  right: 200px;
  top: 68px;

  width: 240px;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

const Loggedin = styled.div`
  font-size: 16px;
  font-family: "CodaCaption";
`;

const Name = styled.div`
  font-size: 16px;
  color: #09ff00;
  font-family: "CodaCaption";
`;

const Profile = styled(RiAliensLine)`
  color: white;
  width: 25px;
  height: 25px;
  cursor: pointer;
  :hover {
    color: #09ff00;
  }
`;
const Shopping = styled(AiTwotoneExperiment)`
  color: white;
  width: 25px;
  height: 25px;

  cursor: pointer;
  :hover {
    color: #09ff00;
  }
`;

const Blank = styled.div`
  width: 5px;
`;

const Settings = styled(IoIosConstruct)`
  color: white;
  width: 25px;
  height: 25px;

  cursor: pointer;
  :hover {
    color: #09ff00;
  }
`;

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [disabled, setDisabled] = useState(true);
  const [abled, setAbled] = useState(false);
  const onClickTitle = () => {
    Router.push("/");
  };

  const router = useRouter();

  const onClickSignout = () => {
    localStorage.removeItem("accessToken");

    window.location.reload();
    Modal.success({ content: "Signed out successfully" });
    router.push("/01-01-market/home");
  };

  useEffect(() => {
    if (process.browser) {
      if (localStorage.getItem("accessToken")) {
        setDisabled(false);
        setAbled(true);
      }
    }
  });

  const onClickBasket = () => {
    router.push("/01-01-market/basket");
  };

  const menu = (
    <Menu>
      <Menu.Item disabled={abled}>
        <a href="/01-01-board/signin">Sign In</a>
      </Menu.Item>
      <Menu.Item onClick={onClickSignout} disabled={disabled}>
        <a>Sign out</a>
      </Menu.Item>
      <Menu.Item disabled={disabled}>
        <a>My Page</a>
      </Menu.Item>
    </Menu>
  );
  //localStorage.getItem("accessToken") 있다면 비활성화

  return (
    <Wrapper>
      <Title onClick={onClickTitle}>GO MAD</Title>
      <HeaderWrapper>
        <Welcome>
          <Loggedin>Welcome </Loggedin>
          <Blank></Blank>
          <Name> {data?.fetchUserLoggedIn.name}</Name>
          <Loggedin>!</Loggedin>
        </Welcome>
        <Space direction="vertical">
          <Dropdown overlay={menu}>
            <Profile>
              <RiAliensLine />
            </Profile>
          </Dropdown>
        </Space>

        <Shopping onClick={onClickBasket}>
          <AiTwotoneExperiment />
        </Shopping>

        <Tooltip title="Settings">
          <Settings>
            <IoIosConstruct />
          </Settings>
        </Tooltip>
      </HeaderWrapper>
    </Wrapper>
  );
}
