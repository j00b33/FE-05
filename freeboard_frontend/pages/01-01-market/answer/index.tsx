import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { isExecutableDefinitionNode } from "graphql";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiEditAlt, BiEraser, BiMessageAltAdd } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../src/commons/types/generated/types";
import { UPDATE_USED_ITEM_QUESTION } from "../../../src/components/market/units/comment/comment.queries";
import EditPage from "./edit";
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
      useditemQuestion {
        _id
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
        });
        setContents("");
        refetch();
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const router = useRouter();

  return (
    <A.Wrapper>
      {props.isAdd ? (
        <A.AnswerTypeWrapper>
          <A.Arrow>{BsArrowReturnRight}</A.Arrow>
          <A.AnswerInput
            type="text"
            onChange={onChangeContents}
            placeholder="Enter Your Comment Here"
            value={contents}
            // defaultValue={event.target.value}
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
            <EditPage el={el} />
          </A.BottomRow>
          <A.DivisionLine />
        </A.AnswerListWrapper>
      ))}
    </A.Wrapper>
  );
}
