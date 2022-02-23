import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
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
          <A.AnswerContents>{el?.contents}</A.AnswerContents>
          <A.DivisionLine />
        </A.AnswerListWrapper>
      ))}
    </A.Wrapper>
  );
}
