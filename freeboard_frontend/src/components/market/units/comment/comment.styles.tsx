import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  border: none;

  padding-top: 100px;
  padding-left: 140px;
`;

export const CreateC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MyTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  font-family: Cochin;
`;

export const MyWriting = styled.input`
  color: grey;
  font-size: 164x;
  font-weight: 500;
  width: 950px;
  height: 90px;
  border-radius: 16px;
  font-family: Cochin;
`;

export const SubmitBtn = styled.div`
  width: 100px;
  height: 90px;
  color: #b81a39;

  background-color: white;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: bold;
  font-family: Cochin;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #b81a39;
    color: white;
  }
`;
