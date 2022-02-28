import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import AnswerPage from "../../../../../pages/01-01-market/answer";
import { Contents } from "../../../board/units/write/BoardWrite.Styles";
import MarketCommentUIPage from "./comment.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./comment.queries";

export default function MarketCommentPage() {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const { data: questionData, fetchMore } = useQuery(
    FETCH_USED_ITEM_QUESTIONS,
    {
      variables: { useditemId: String(router.query.productDetail) },
    }
  );

  const [contents, setContents] = useState("");

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    if (contents !== "") {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.productDetail),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.productDetail),
            },
          },
        ],
      });
      setContents("");
    }
    console.log(Contents);
  }

  function onLoadMore() {
    if (!questionData) return;

    fetchMore({
      variables: {
        page: Math.ceil(questionData?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  }

  return (
    <MarketCommentUIPage
      questionData={questionData}
      onClickSubmit={onClickSubmit}
      contents={contents}
      onChangeContents={onChangeContents}
      onLoadMore={onLoadMore}
    />
  );
}
