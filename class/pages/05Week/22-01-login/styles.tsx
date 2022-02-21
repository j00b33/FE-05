import styled from "@emotion/styled";

export const Button = styled.div`
  cursor: pointer;
  background-color: #72b3af;
  width: 300px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  :hover {
    background-color: #96bdba;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 500px;

  margin: 50px;
`;

export const Email = styled.input`
  width: 300px;
`;

export const Password = styled.input`
  width: 300px;
`;
