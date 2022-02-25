import styled from "@emotion/styled";
import { BiEraser } from "react-icons/bi";

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  padding-left: 330px;
  display: flex;
  flex-direction: column;
`;

export const AnswerTypeWrapper = styled.div`
  height: 50px;

  display: flex;
  flex-direction: row;
`;
export const AnswerInput = styled.input`
  width: 600px;
  height: 50px;
`;

export const AnswerSubmit = styled.div`
  cursor: pointer;
  width: 67px;
  height: 50px;
  border: 1px solid black;

  font-size: 13px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  background-color: #ba85e0;
  color: white;
`;

export const AnswerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80px;
  width: 667px;
`;

export const AnswerName = styled.div`
  color: #3a3a3a;
  font-size: 14px;
  font-weight: 700;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AnswerContents = styled.div`
  font-size: 17px;
`;

export const AnswerDelete = styled(BiEraser)`
  color: grey;
  width: 20px;
  height: 20px;

  cursor: pointer;

  :hover {
    color: #9900ff;
  }
`;

export const DivisionLine = styled.div`
  width: 667px;
  border: 1px solid #ba85e0;
`;
