import styled from "@emotion/styled";
import Router from "next/router";
import { Tooltip } from "antd";
import { RiUser5Line, RiSettings2Line } from "react-icons/ri";
import { GiSafetyPin } from "react-icons/gi";
import { Menu, Dropdown, Space } from "antd";

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

  width: 110px;
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
  const onClickTitle = () => {
    Router.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/01-01-board/signup">Sign Up</a>
      </Menu.Item>
      <Menu.Item disabled>
        <a>Sign In</a>
      </Menu.Item>
      <Menu.Item disabled>
        <a>My Page</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
      <Title onClick={onClickTitle}>Pierce Peers</Title>
      <HeaderWrapper>
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
