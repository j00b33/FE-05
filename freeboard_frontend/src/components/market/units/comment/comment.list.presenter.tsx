import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiEditAlt, BiEraser, BiMessageAltAdd } from "react-icons/bi";
import AnswerPage from "../../../../../pages/01-01-market/answer";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./comment.queries";
import * as C from "./comment.styles";

export default function CommentList(props) {
  const [isAdd, setIsAdd] = useState(false);
  const onClickAddAnswer = () => {
    setIsAdd((prev) => !prev);
  };
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const router = useRouter();

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          //questionId 받아와야함
          useditemQuestionId: props.questionData.fetchUseditemQuestions._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemQuestionId: props.questionData.fetchUseditemQuestions._id,
            },
          },
        ],
      });
      Modal.success({ content: "Comment is deleted" });
    } catch (error) {
      Modal.error({ content: "Failed to delete the comment" });
    }
  }

  return (
    <>
      <C.Comments key={props.el._id}>
        <C.WriterName>{props.el?.user.name}</C.WriterName>
        <C.BottomRow>
          <C.WriterComment>{props.el?.contents}</C.WriterComment>
          <C.Update>
            <C.QuestionEdit>{BiEditAlt}</C.QuestionEdit>
            <C.QuestionDelete onClick={props.onClickDelete}>
              {BiEraser}
            </C.QuestionDelete>
            <C.AnswerAdd onClick={onClickAddAnswer}>
              {BiMessageAltAdd}
            </C.AnswerAdd>
          </C.Update>
        </C.BottomRow>
        <C.DivisionLine></C.DivisionLine>
      </C.Comments>
      {isAdd && <AnswerPage isAdd={true} el={props.el} />}
    </>
  );
}
