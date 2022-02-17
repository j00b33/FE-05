import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//Header
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100px;
  margin: 100px;
`;

export const HeaderLine = styled.div`
  border: 2px dashed black;
  width: 1200px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderTitle = styled.div`
  color: black;
  font-size: 60px;
`;

export const Space = styled.div`
  width: 16px;
`;

export const HeaderTitle2 = styled.div`
  color: #b81a39;
  font-size: 60px;
`;

//bodyWrapper
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 900px;
`;

//Sell
export const InnerBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 800px;
  margin: 50px;
`;

export const MainPic1 = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 300px;
  box-shadow: -30px 30px #b81a39;
`;

export const MainPic2 = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 300px;
  box-shadow: 30px 30px #b81a39;
`;

export const Select = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 30px;

  width: 300px;
  height: 30px;

  :hover {
    color: #b81a39;
  }
`;
