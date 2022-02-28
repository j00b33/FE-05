import styled from "@emotion/styled";
import { BiEditAlt, BiEraser } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-left: 250px;
`;

export const Arrow = styled(BsArrowReturnRight)`
  margin-top: 10px;
  font-weight: 700;
  width: 30px;
  height: 30px;
  margin-right: 50px;
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
  padding-left: 85px;
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
  width: 667px;
`;

export const AnswerContents = styled.div`
  font-size: 17px;
`;

export const Update = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AnswerEdit = styled(BiEditAlt)`
  color: grey;
  width: 20px;
  height: 20px;

  cursor: pointer;

  :hover {
    color: #9900ff;
  }
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

export const AnswerEditWrapper = styled.div`
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AnswerContentsEdit = styled.input`
  width: 480px;
  height: 35px;

  font-size: 17px;
  border: 2px dotted grey;
`;

export const AnswerContentsEditBtn = styled.div`
  width: 100px;
  height: 35px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";
  font-size: 15px;

  cursor: pointer;

  background-color: #c9b3d8;
  border: 2px dotted grey;
`;

export const EditWrapperPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 700px;
`;
