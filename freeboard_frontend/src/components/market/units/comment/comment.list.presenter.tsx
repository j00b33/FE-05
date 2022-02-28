import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiEditAlt, BiEraser, BiMessageAltAdd } from "react-icons/bi";
import AnswerPage from "../../../../../pages/01-01-market/answer";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./comment.queries";
import * as C from "./comment.styles";

export default function CommentList(props) {
  const [isAdd, setIsAdd] = useState(false);
  const onClickAddAnswer = () => {
    setIsAdd((prev) => !prev);
  };
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const [editQuestion, setEditQuestion] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();

  //아이콘 눌렀을때
  const onClickEdit = () => {
    setIsEdit(true);
  };

  // edit input
  function onChangeEdit(event) {
    setEditQuestion(event.target.value);
  }

  // edit submit button
  async function onClickEditQuestion() {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
          updateUseditemQuestionInput: {
            contents: editQuestion,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.productDetail,
              contents: editQuestion,
            },
          },
        ],
      });
      Modal.success({ content: "Edit Done" });
      setIsEdit(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          //questionId 받아와야함
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.productDetail,
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
          {isEdit ? (
            <C.EditWrapper>
              <C.WriterCommentEdit
                type="text"
                defaultValue={props.el?.contents}
                onChange={onChangeEdit}
              ></C.WriterCommentEdit>
              <C.WriterCommentEditBtn onClick={onClickEditQuestion}>
                Edit
              </C.WriterCommentEditBtn>
            </C.EditWrapper>
          ) : (
            <C.WriterComment>{props.el?.contents}</C.WriterComment>
          )}
          <C.Update>
            <C.QuestionEdit onClick={onClickEdit}>{BiEditAlt}</C.QuestionEdit>
            <C.QuestionDelete onClick={onClickDelete}>
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
