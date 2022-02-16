import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70px;
  justify-content: space-evenly;

  margin-bottom: 30px;
`;

export const SubTitle = styled.div`
  font-size: 15px;
  color: grey;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
`;

export const Error = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 3px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  height: 75px;
`;

export const Box = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 300px;
  height: 40px;
`;

export const Button = styled.div`
  width: 300px;
  height: 50px;

  margin-top: 20px;

  background-color: #b81a39;
  color: white;

  font-size: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid black;
  border-radius: 15px;

  cursor: pointer;

  :hover {
    background-color: #9c1c36;
  }
`;

export const SignupWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 260px;
`;

export const GoSignupText = styled.div`
  font-size: 15px;
  color: #575757;
`;

export const GoSignup = styled.div`
  cursor: pointer;
  font-size: 15px;
  color: #9e9e9e;

  :hover {
    color: #575757;
    text-decoration-line: underline;
  }
`;
