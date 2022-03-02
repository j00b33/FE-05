import { useMutation, gql, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "6217021d8cd4860029b4ca6f" } }
  );

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: {
        boardId: "6217021d8cd4860029b4ca6f",
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "6217021d8cd4860029b4ca6f" },
      //     },
      //   ],

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },

      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6217021d8cd4860029b4ca6f" },
          //기존에 있던 쿼리 영역을 data 안에 들어가는 내용으로 바꿔치기 한다는 것
          data: {
            fetchBoard: {
              _id: "6217021d8cd4860029b4ca6f",
              __typename: "Board",
              //typename에랑 _id는 같이 따라붙어다녀야함
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>옵티미스틱 UI</h1>
      <div>현재 카운트(좋아요 갯수): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
