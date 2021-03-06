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
  margin-left: 10px;
  font-size: 60px;
  font-family: "CodaCaption";
  color: #9900ff;

  cursor: pointer;
`;

export const Title3 = styled.div`
  margin-left: 10px;

  font-size: 60px;
  font-family: "CodaCaption";
`;

//Whole Body Wrapper
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
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
  //margin 여부 고민중
  margin-left: 75px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 600px;

  /* border-bottom: 2px solid #999999; */
`;

export const PresenterSelect = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: grey;
  cursor: pointer;
  :hover {
    color: black;
  }
  transition: 0.4s;
`;

//current money
export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserMoney = styled.div`
  font-size: 20px;
  color: #9900ff;
  font-weight: 700;
`;

//navigation
export const MyPageNavigationWrapper = styled.div`
  margin-top: 100px;
  padding-right: 100px;

  width: 300px;
  /* height: 120px; */
  height: 70px;

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

  transition: 0.4s;

  font-weight: 700;

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
