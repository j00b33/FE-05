import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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
  mutation createBoard($createBoardInput: CreateBoardInput) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
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

              //삭제된거 빼고 그려주는거 //readField 활용해서 읽어주기
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

  const onClickSubmit = async () => {
    //등록하기 로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "JB",
          password: "asdf",
          title: "This is title",
          contents: "This is content",
        },
      },
      update(cache, { data }) {
        cache.modify({
          //cache 직접 수정
          fields: {
            fetchBoards: (prev) => {
              //기존에 있던 30개의 데이터를 받아오고 그걸 그래도 내보내서 리턴 //방금 create된 글을 합쳐줌으로써 목록 완성  => 31개 리턴
              return [data.createBoard, ...prev]; //[{writer: "JB"}, {password: "asdf"}, ...]
              //뒤에는 기존 30개 앞에는 새로 올라온것들 (최신순)
            },
          },
        });
      },
    });
  };

  // 1. 구조분해 할당으로 함수 파라미터 받기
  // function onClickAAA({ name, age, school }){
  //   console.log(name)
  // }

  // const child = {
  //   name: "철수",
  //   age: 13,
  //   school: "다람쥐초등학교"
  // }
  // onClickAAA(child)

  // 2. 안좋은 옛날 방식
  // function onClickAAA(name, age, school){
  //   console.log(name)
  // }

  // const name: "철수"
  // const age: 13
  // const school: "다람쥐초등학교"
  // onClickAAA(name, school)

  return (
    //게시물 목록 뿌리깅
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>Delete</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>Upload</button>
    </div>
  );
}
