import styled from "@emotion/styled";
import Router, { useRouter } from "next/router";
import { Modal, Tooltip } from "antd";
import { RiUser5Line, RiSettings2Line } from "react-icons/ri";
import { GiSafetyPin } from "react-icons/gi";
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

  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 80px;
  color: #b81a39;
  font-family: Cochin;
  padding-left: 170px;
  font-weight: 900;

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

  width: 220px;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: row;
`;

const Loggedin = styled.div`
  font-size: 16px;
`;

const Name = styled.div`
  font-size: 16px;
  color: #b81a39;
`;

const Profile = styled(RiUser5Line)`
  color: black;
  width: 25px;
  height: 25px;
  cursor: pointer;
  :hover {
    color: #b81a39;
  }
`;
const Shopping = styled(GiSafetyPin)`
  color: black;
  width: 25px;
  height: 25px;

  cursor: pointer;
  :hover {
    color: #b81a39;
  }
`;

const Blank = styled.div`
  width: 5px;
`;

const Settings = styled(RiSettings2Line)`
  color: black;
  width: 25px;
  height: 25px;

  cursor: pointer;
  :hover {
    color: #b81a39;
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
    router.push("/01-01-board/signin");
  };

  useEffect(() => {
    if (process.browser) {
      if (localStorage.getItem("accessToken")) {
        setDisabled(false);
        setAbled(true);
      }
    }
  });

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
      <Title onClick={onClickTitle}>Pierce Peers</Title>
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
              <RiUser5Line />
            </Profile>
          </Dropdown>
        </Space>

        <Tooltip title="Cart">
          <Shopping>
            <GiSafetyPin />
          </Shopping>
        </Tooltip>

        <Tooltip title="Settings">
          <Settings>
            <RiSettings2Line />
          </Settings>
        </Tooltip>
      </HeaderWrapper>
    </Wrapper>
  );
}
