import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 100px;
  background-color: black;
`;

export const TopBox = styled.div`
  height: 120px;
  background-color: black;
  width: 100%;
`;
export const TopBoxLetter = styled.div`
  font-family: "CodaCaption";
  color: #9900ff;
  font-size: 90px;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding-bottom: 40px;
  margin-left: 150px;
`;

export const TopLine = styled.div`
  height: 20px;
  width: 100%;
  background-color: #09ff00;
  margin-bottom: 20px;
`;

//Main Title: We are mad scientists
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 1200px;

  padding-bottom: 200px;
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

export const MainTitleOne = styled.div`
  color: white;
  font-family: "CodaCaption";
  font-size: 65px;
`;
export const Space = styled.div`
  width: 16px;
`;
export const MainTitleTwo = styled.div`
  color: #9900ff;
  font-family: "CodaCaption";
  font-size: 65px;
`;

//album pictures
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 600px;

  padding-top: 100px;
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
  width: 250px;
  height: 250px;
  border: 4px solid black;
  box-shadow: 20px 20px #3a3a3a;
`;

export const MainPicDes = styled.div`
  padding-top: 40px;
  color: #dfdfdf;
  font-size: 17px;
  width: 220px;

  font-family: "Roboto";

  text-align: center;
`;

export const MainPicSinger = styled.div`
  color: #dfdfdf;
  font-size: 15px;
  width: 220px;
  font-family: "Roboto";

  text-align: center;
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1300px;
`;

export const Columntwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1300px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//footer
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;

  height: 100px;
  margin-top: 100px;
`;

export const HomeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "CodaCaption";
  font-size: 40px;

  background-color: #9900ff;
  color: white;

  width: 100%;
  height: 100px;

  cursor: pointer;
  :hover {
    color: black;
  }
`;
