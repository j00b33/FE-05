import { useRouter } from "next/router";
import Head from "next/head";

export default function BoardsDetailPage() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content="게시판" />
        <meta property="og:description" content="게시판에 오신걸 환영합니다" />
        <meta
          property="og:image"
          content="https://dullyshin.github.io/2018/08/30/HTML-imgLink/#lg=1&slide=0"
        />
      </Head>

      <div>
        안녕하세요 게시글 상세페이지 입니다, 게시글 아이디는{" "}
        {router.query.boardId} 입니다.
      </div>
    </div>
  );
}
