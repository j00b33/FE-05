import styled from "@emotion/styled";
import { BiEditAlt, BiMessageAltAdd } from "react-icons/bi";
import { BiEraser } from "react-icons/bi";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;

  padding-top: 100px;
  margin-left: 100px;
  margin-bottom: 500px;
`;

export const CreateC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1000px;
`;

export const MyTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  margin-left: 200px;
`;

export const Input = styled.input`
  color: grey;
  font-size: 16px;
  font-weight: 500;
  width: 900px;
  height: 80px;
  /* border-radius: 20px; */
`;

export const SubmitBtn = styled.div`
  width: 100px;
  height: 80px;
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
  /* border-radius: 20px; */
  cursor: pointer;

  :hover {
    background-color: #b81a39;
    color: white;
  }
`;

//fetchComments//
export const FetchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 700px;
  overflow: auto;
`;

export const Comments = styled.div`
  height: 50px;
  width: 1000px;
  margin-top: 30px;
`;

export const WriterName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #3a3a3a;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const WriterComment = styled.div`
  font-size: 20px;
`;

export const Update = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 70px;
`;

export const QuestionEdit = styled(BiEditAlt)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
`;

export const QuestionDelete = styled(BiEraser)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
`;

export const AnswerAdd = styled(BiMessageAltAdd)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
`;

export const DivisionLine = styled.div`
  width: 1000px;
  border: 1px solid #b93652;
`;

export const ScrollMore = styled.div`
  color: grey;
  font-size: 17px;
  margin-top: 30px;
`;
function BsEraserFill(BsEraserFill: any) {
  throw new Error("Function not implemented.");
}
