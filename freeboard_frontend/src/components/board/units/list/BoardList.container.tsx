import BoardListUIPage from "./BoardList.presenter";
import { useRouter } from "next/router";

export default function BoardListPage(props) {
  const router = useRouter();

  function onClickMoveToBoardDetail(event) {
    router.push(`/01-01-board/${event.currentTarget.id}`);
  }

  return (
    <BoardListUIPage
      data={props.data}
      keyword={props.keyword}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
