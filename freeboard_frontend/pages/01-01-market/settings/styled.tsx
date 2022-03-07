import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`;

export const Header = styled.div`
  font-size: 30px;
  font-family: "CodaCaption";
`;

export const BodyWrapper = styled.div`
  margin-top: 50px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 500px;
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  height: 550px;

  margin-bottom: 50px;
  margin-left: 50px;
`;

export const DivisionLine = styled.div`
  border: 1px solid grey;
  width: 600px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  height: 900px;

  margin-bottom: 50px;
  margin-left: 50px;
`;

export const SubHeader = styled.div`
  font-size: 25px;
  font-family: "CodaCaption";
  font-weight: 700;
`;

export const Text = styled.div`
  font-size: 20px;
  margin-right: 10px;
  font-weight: 700;
`;

export const Input = styled.input`
  font-size: 17px;
  width: 300px;
  border: 2px solid black;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 160px;
  height: 30px;
  font-size: 18px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid grey;
  :hover {
    color: #00eeff;
    background-color: black;
    border: 2px solid #00eeff;
  }
`;
