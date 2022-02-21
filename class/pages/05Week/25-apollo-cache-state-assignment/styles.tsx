import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 50px;

  height: 650px;
`;

export const InnerWrapper = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`;

export const DivisionLine = styled.div`
  margin-top: 30px;
  border: 3px dashed #73afc7;
  width: 300px;
`;

export const CreateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.div`
  color: #73afc7;
  font-size: 20px;
  font-weight: 700;
`;

export const Input = styled.input`
  border-color: #73afc7;
  border-radius: 15px;
  font-size: 15px;

  width: 300px;
  height: 40px;

  margin: 10px;
`;

export const List = styled.div`
  text-align: center;
`;

export const Delete = styled.div`
  background-color: #73afc7;
  color: white;
  cursor: pointer;
  border: 2px solid black;
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #73afc7;
  color: white;
  cursor: pointer;
`;
