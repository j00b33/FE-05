import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiEraser } from "react-icons/bi";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../src/commons/types/generated/types";
import * as A from "./styles";

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
    }
  }
`;

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
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

export default function AnswerPage(props) {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
      page: 1,
    },
  });

  const [contents, setContents] = useState("");
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  const onClickAdd = async () => {
    if (contents) {
      try {
        await createUseditemQuestionAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents,
            },
            useditemQuestionId: String(props.el._id),
          },
          // refetchQueries: [
          //   {
          //     query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          //     variables: {
          //       useditemQuestionId: String(props.el._id),
          //     },
          //   },
          // ],
        });
        refetch();
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const router = useRouter();
  const onClickDelete = (el) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          //questionId 받아와야함
          useditemQuestionAnswerId: el,
        },
      });
      refetch();
      Modal.success({ content: "Comment is deleted" });
    } catch (error) {
      Modal.error({ content: "Failed to delete the comment" });
    }
  };

  return (
    <A.Wrapper>
      {props.isAdd ? (
        <A.AnswerTypeWrapper>
          <A.AnswerInput
            type="text"
            onChange={onChangeContents}
            value={contents}
          ></A.AnswerInput>
          <A.AnswerSubmit onClick={onClickAdd}>Comment</A.AnswerSubmit>
        </A.AnswerTypeWrapper>
      ) : (
        <></>
      )}

      <br />

      {/* 대댓 리스트 */}
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <A.AnswerListWrapper key={el._id}>
          <A.AnswerName>{el?.user.name}</A.AnswerName>
          <A.BottomRow>
            <A.AnswerContents>{el?.contents}</A.AnswerContents>
            <A.AnswerDelete onClick={onClickDelete(el._id)}>
              {BiEraser}
            </A.AnswerDelete>
          </A.BottomRow>
          <A.DivisionLine />
        </A.AnswerListWrapper>
      ))}
    </A.Wrapper>
  );
}
