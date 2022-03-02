import styled from "@emotion/styled";
import Router, { useRouter } from "next/router";
import { Modal, Tooltip } from "antd";
import { RiAliensLine } from "react-icons/ri";
import { AiTwotoneExperiment } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { Menu, Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
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
  align-items: center;

  position: absolute;
  right: 170px;
  top: 68px;

  width: 300px;
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
  color: #00eeff;
  font-family: "CodaCaption";
`;

const Blank = styled.div`
  width: 5px;
`;

const Sign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  :hover {
    color: #00eeff;
    border: 1px solid #00eeff;
  }
  background-color: none;
  border: 1px solid white;
  width: 100px;
  margin-left: 20px;
`;

const Alien = styled.div`
  color: #00eeff;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const LoggedOut = styled.div`
  display: flex;
  flex-direction: row;
  color: white;

  margin-left: 200px;
`;

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickTitle = () => {
    Router.push("/");
  };

  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const onClickSignout = () => {
    logoutUser();
    window.location.reload();
    router.push("/01-01-market/home");
  };

  const onClickSignin = () => {
    router.push("/01-01-board/signin");
  };

  const onClickMyPage = () => {
    router.push("/01-01-market/mypage");
  };

  //   <Menu.Item disabled={abled}>
  //   <a href="/01-01-board/signin">Sign In</a>
  // </Menu.Item>
  console.log("data");
  console.log(data);
  return (
    <Wrapper>
      <Title onClick={onClickTitle}>GO MAD</Title>
      <HeaderWrapper>
        {data ? (
          <Welcome>
            <Alien onClick={onClickMyPage}>
              <RiAliensLine />
            </Alien>
            <Loggedin>Welcome</Loggedin>
            <Blank></Blank>
            <Name> {data?.fetchUserLoggedIn.name}</Name>
            <Blank></Blank>
            <Sign onClick={onClickSignout}>Sign out</Sign>
          </Welcome>
        ) : (
          <LoggedOut>
            <Alien>
              <RiAliensLine />
            </Alien>
            <Sign onClick={onClickSignin}>Sign in</Sign>
          </LoggedOut>
        )}
      </HeaderWrapper>
    </Wrapper>
  );
}
