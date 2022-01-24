import BoardListUIPage from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickMoveToBoardNew() {
    router.push("/01-01-board/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/01-01-board/${event.target.id}`);
  }

  return (
    <BoardListUIPage
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
