import { useRouter } from "next/router";
import { gql, request } from "graphql-request";
import Head from "next/head";

export default function BoardsDetailPage(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myboardData.title} />
        <meta property="og:description" content={props.myboardData.contents} />
        <meta property="og:image" content={props.myboardData.images[0]} />
      </Head>

      <div>
        안녕하세요 게시글 상세페이지 입니다, 게시글 아이디는{" "}
        {router.query.boardId} 입니다.
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

export const getServerSideProps = (context) => {
  //page에서만 요청 가능
  //정해진 이름이라 aaa 이런식으로 바꾸기 불가능
  //export const 를 사용하여 내보내줘야함
  //이게 먼저 실행됨
  //데이터를 요청할 것
  //이 페이지는 서버사이드 렌더링 할 예정 --> 그래서 getServerSideProps가 먼저 실행되고 이때 return Data가 props로 넘어가게 됨
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
