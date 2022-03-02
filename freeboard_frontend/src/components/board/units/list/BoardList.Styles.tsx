import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const DivisionLine = styled.div`
  border: 1px solid #9900ff;
  display: flex;
  width: 300px;
`;

export const ListWrapper = styled.div`
  width: 1200px;
  height: 500px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 300px;
`;

export const HeadType = styled.div`
  font-size: 20px;
  color: white;
  font-family: "CodaCaption";
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: white;

  height: 30px;
  padding-bottom: 20px;
`;

export const MyNumber = styled.div`
  font-size: 15px;
`;

export const MyTitle = styled.div`
  cursor: pointer;
  :hover {
    color: #00eeff;
    text-decoration-line: underline;
  }
`;

export const MyWriter = styled.div``;

export const MyDate = styled.div`
  font-size: 15px;
  font-family: Arial;
`;
