import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import * as A from "./styles";
import { useForm } from "react-hook-form";

interface FormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { register, handleSubmit, formState } = useForm();

  //원래하던 방법:
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickDelete = (boardId: string) => async () => {
    //가장 가까운거에 async 붙이기
    //삭제하기 로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              //삭제하고 그 삭제를 반영하려면 목록을 수정해줘야함
              //prev 안에 기존 30개 데이터가 존재 --> 삭제가 되면 29개로 변경해야함

              //삭제된거 빼고 그려주기 //readField 활용해서 읽어주기
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId //el._id가 안되므로 readField 사용
                //안겹치는 애들은 그리고 겹치면 버리기
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async (data: FormValues) => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },

      update(cache, { data }) {
        cache.modify({
          //cache 직접 수정
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
    console.log("====Check====");
    console.log(data);
  };

  return (
    <A.Wrapper>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <A.InnerWrapper>
          {data?.fetchBoards.map((el) => (
            <A.Row key={el._id}>
              <A.List>{el.writer}</A.List>
              <A.List>{el.title}</A.List>
              <A.Delete onClick={onClickDelete(el._id)}>X</A.Delete>
            </A.Row>
          ))}
        </A.InnerWrapper>

        <A.DivisionLine></A.DivisionLine>

        <A.CreateWrapper>
          <A.Title>글 등록</A.Title>
          <A.Input
            type="text"
            placeholder="작성자를 입력해주세요"
            {...register("writer")}
          ></A.Input>
          <A.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
          ></A.Input>
          <A.Input
            type="text"
            placeholder="제목을 입력해주세요"
            {...register("title")}
          ></A.Input>
          <A.Input
            type="text"
            placeholder="내용을 입력해주세요"
            {...register("contents")}
          ></A.Input>
          <A.Button>등록하기</A.Button>
        </A.CreateWrapper>
      </form>
    </A.Wrapper>
  );
}
