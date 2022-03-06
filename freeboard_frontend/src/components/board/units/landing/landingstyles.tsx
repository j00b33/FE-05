import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 80px;
  background-color: black;
`;

export const TopBox = styled.div`
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 1000px;

  @media (min-width: 0px) and (max-width: 1000px) {
    height: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1000px;
`;
export const TopBoxLetter = styled.div`
  font-family: "CodaCaption";
  color: #9900ff;
  font-size: 90px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LandingNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  margin-top: 50px;
`;

export const Navigation = styled.div`
  font-size: 18px;
  color: white;

  cursor: pointer;

  :hover {
    color: #9900ff;
  }
`;

export const TopLine = styled.div`
  height: 10px;
  width: 100%;
  background-color: #00eeff;
  margin-bottom: 16px;
`;

export const TopLine2 = styled.div`
  height: 10px;
  width: 100%;
  background-color: #9900ff;
  margin-bottom: 16px;
`;

//Main Title
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  width: 1200px;

  @media (min-width: 0px) and (max-width: 1000px) {
    margin-top: 60px;
`;

export const MainSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.div`
  color: #b1b1b1;
  font-size: 30px;
  font-family: "CodaCaption";
`;

export const MainTitle = styled.div`
  color: white;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 34px;

  width: 180px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//album pictures
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//picture
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20px;
`;

export const MainPic = styled.img`
  width: 170px;
  height: 170px;
  border: 4px solid white;
  box-shadow: 20px 20px #00eeff;
`;

export const MainPicDes = styled.div`
  padding-top: 40px;
  color: #dfdfdf;
  font-size: 15px;
  width: 220px;

  font-family: "Roboto";

  text-align: center;
`;

export const MainPicSinger = styled.div`
  color: #dfdfdf;
  font-size: 13px;
  width: 220px;
  font-family: "Roboto";

  text-align: center;
`;

//Each Row
export const RowOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 800px;

  @media (min-width: 0px) and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RowTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 600px;

  margin-top: 80px;

  @media (min-width: 0px) and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
`;

//Each whole one pic Wrappcer
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
