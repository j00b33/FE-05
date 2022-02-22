import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketCommentUIPage from "./comment.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./comment.queries";

export default function MarketCommentPage() {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const { data: questionData } = useQuery(FETCH_USED_ITEM_QUESTIONS);
  const { data: AnswerData } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS);

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
          useditemId: String(router.query.marketDetail),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.marketDetail),
            },
          },
        ],
      });
      setContents("");
    }
  }

  return (
    <MarketCommentUIPage
      onClickSubmit={onClickSubmit}
      contents={contents}
      onChangeContents={onChangeContents}
    />
  );
}
