import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../src/commons/types/generated/types";

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
  const router = useRouter();
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const { data: fetchAnswer } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS);

  function onChangeContents(event) {
    setContents(event.target.value);
  }
  const [contents, setContents] = useState("");

  const onClickAdd = async () => {
    // console.log(props.el._id);

    if (contents !== "") {
      try {
        await createUseditemQuestionAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents,
            },
            useditemQuestionId: String(props.el._id),
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: {
                useditemQuestionId: String(props.el._id),
              },
            },
          ],
        });
      } catch (error) {
        alert(error.message);
      }
      setContents(contents);
    }
  };
  return (
    <div>
      {props.isAdd ? (
        <div>
          <input type="text" onChange={onChangeContents}></input>
          <button onClick={onClickAdd}>Comment</button>
        </div>
      ) : (
        <></>
      )}

      <br />

      {/* 대댓 리스트 */}
      {fetchAnswer?.fetchUseditemQuestionAnswers.map((el) => (
        <div key={el.user.name}>
          <div>{el?._id}</div>
          <div>{el?.contents}</div>
        </div>
      ))}
    </div>
  );
}
