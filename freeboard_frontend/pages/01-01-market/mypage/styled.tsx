import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 130px;
  margin-top: 100px;
`;

export const Header = styled.div``;

//Title Settings
export const Title = styled.div`
  width: 350px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title1 = styled.div`
  font-size: 60px;
  font-family: "CodaCaption";
  padding-top: 10px;
`;

export const Title2 = styled.div`
  font-size: 60px;
  font-family: "CodaCaption";
  color: #9900ff;
`;

export const Title3 = styled.div`
  font-size: 60px;
  font-family: "CodaCaption";
`;

//Whole Body Wrapper
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;

//Left Section of Body
export const BodyLeftWrapper = styled.div`
  width: 300px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

export const ProfilePic = styled.div`
  font-size: 100px;
`;

export const SubTitle = styled.div`
  font-size: 30px;
  font-family: "CodaCaption";
`;

export const PreSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;

  border-bottom: 2px solid #999999;
`;

export const PresenterSelect = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: grey;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

//current money
export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserMoney = styled.div`
  font-size: 20px;
  color: #61d7f5;
  font-weight: 700;
`;

//navigation
export const MyPageNavigationWrapper = styled.div`
  margin-top: 100px;
  padding-right: 100px;

  width: 300px;
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  cursor: pointer;
  font-size: 20px;
  :hover {
    color: #9900ff;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
`;
//Division Line
export const DivisionLine = styled.div`
  border: 1px solid grey;
  height: 900px;
`;

//Right Section of Body
export const BodyRightWrapper = styled.div`
  width: 900px;
  padding: 70px;
`;
