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
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  font-size: 17px;
  width: 300px;
`;

export const Button = styled.div`
  margin-top: 30px;
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
