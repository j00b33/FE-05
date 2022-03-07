import styled from "@emotion/styled";
import { Rate } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

export const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: 30px;
  font-weight: bold;

  font-family: "CodaCaption";

  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 550px;
  padding-bottom: 30px;
`;
export const PInput = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid black;
`;

export const Star = styled(Rate)`
  display: flex;
  flex-direction: row;
`;

export const MyComment = styled.div`
  width: 1200px;
  height: 161px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MyWriting = styled.input`
  color: grey;
  font-size: 164x;
  font-weight: 500;
  width: 800px;
  height: 70px;
`;

export const SubmitBtn = styled.div`
  width: 100px;
  height: 70px;

  background-color: white;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #9900ff;
    color: white;
  }
`;
//Comments List
export const Comments = styled.div`
  border: none;
  width: 1200px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrittenStar = styled(Rate)`
  padding-top: 30px;
`;

export const Writer = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const WriterComment = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

export const DivisionLine = styled.div`
  width: 900px;
  border: 1px solid grey;
`;

export const Update = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 60px;

  font-size: 16px;
  padding-top: 10px;
`;

export const CommentsWrapper = styled.div`
  height: 400px;
  overflow: auto;
  width: 1200px;

  margin-top: 30px;
`;

export const CommentAlert = styled.div`
  color: #f1345a;
  margin-top: 20px;

  margin-bottom: 100px;
`;

export const CommentEdit = styled(GrEdit)`
  cursor: pointer;
  :hover {
    color: #09ff00;
  }
`;

export const Delete = styled(RiDeleteBinLine)`
  cursor: pointer;

  :hover {
    color: #09ff00;
  }
`;
