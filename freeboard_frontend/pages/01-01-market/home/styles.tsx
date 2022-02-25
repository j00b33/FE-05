import styled from "@emotion/styled";
import { GiChemicalTank, GiRoundBottomFlask } from "react-icons/gi";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  background-color: black;
`;

//Header
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 100px;
  margin-bottom: 40px;
  height: 100px;

  font-weight: 700;
`;

export const HeaderLine = styled.div`
  border: 2px dashed white;
  width: 1200px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderTitle = styled.div`
  font-family: Impact;
  color: #9900ff;
  font-size: 60px;
`;

export const Space = styled.div`
  width: 16px;
`;

export const HeaderTitle2 = styled.div`
  font-family: Impact;
  color: #09ff00;
  font-size: 60px;
`;

//bodyWrapper
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 300px;
`;

//Sell
export const InnerBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  height: 240px;
  margin: 50px;

  color: #cfcfcf;

  cursor: pointer;

  :hover {
    color: #09ff00;
  }
`;

export const InnerBodyWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  height: 240px;
  margin: 50px;

  color: #cfcfcf;

  cursor: pointer;

  :hover {
    color: #9900ff;
  }
`;

export const MainPic1 = styled(GiRoundBottomFlask)`
  width: 200px;
  height: 200px;
`;

export const MainPic2 = styled(GiChemicalTank)`
  display: flex;
  width: 200px;
  height: 200px;
`;

export const Select = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "CodaCaption";

  font-size: 25px;

  width: 300px;
  height: 30px;
`;
