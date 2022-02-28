import {
  gql,
  Reference,
  StoreObject,
  useMutation,
  useQuery,
} from "@apollo/client";
import { useState } from "react";
import * as A from "./styles";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../src/commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./index";
import { Modal } from "antd";
import { BiEditAlt, BiEraser } from "react-icons/bi";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../src/components/market/units/comment/comment.queries";

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
      contents
    }
  }
`;

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export default function EditPage(props) {
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
      page: 1,
    },
  });

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const [editAnswer, setEditAnswer] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onChangeEdit = (event) => {
    console.log(event.target.value);
    setEditAnswer(event.target.value);
  };

  async function onClickEditAnswer(event) {
    try {
      console.log(event.target.id);
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id,
          updateUseditemQuestionAnswerInput: {
            contents: editAnswer,
          },
        },
      });
      refetch();
      setIsEdit(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  const onClickDelete = async () => {
    console.log("==========");
    console.log(props.el?.useditemQuestion._id);
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          //questionId 받아와야함
          useditemQuestionAnswerId: String(props.el?._id),
        },
        update(cache, { data }) {
          const deleteId = data?.deleteUseditemQuestionAnswer;
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const filteredPrev = prev.filter(
                  (el: Reference | StoreObject | undefined) =>
                    readField("_id", el) !== deleteId
                );
                return [...filteredPrev];
              },
            },
          });
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USED_ITEM_QUESTION_ANSWERS,
        //     variables: {
        //       useditemQuestionId: String(props.el?.useditemQuestion._id),
        //     },
        //   },
        // ],
      });
      // refetch();
      Modal.success({ content: "Comment Deleted" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <A.EditWrapperPage>
      {isEdit ? (
        <A.AnswerEditWrapper>
          <A.AnswerContentsEdit
            type="text"
            defaultValue={props.el?.contents}
            onChange={onChangeEdit}
          ></A.AnswerContentsEdit>
          <A.AnswerContentsEditBtn
            id={props.el._id}
            onClick={onClickEditAnswer}
          >
            Edit
          </A.AnswerContentsEditBtn>
        </A.AnswerEditWrapper>
      ) : (
        <A.AnswerContents>{props.el?.contents}</A.AnswerContents>
      )}

      <A.Update>
        <A.AnswerEdit onClick={onClickEdit}>{BiEditAlt}</A.AnswerEdit>
        <A.AnswerDelete onClick={onClickDelete}>{BiEraser}</A.AnswerDelete>
      </A.Update>
    </A.EditWrapperPage>
  );
}
