import BoardListUIPage from "./BoardList.presenter";
import { useRouter } from "next/router";

export default function BoardListPage(props) {
  const router = useRouter();

  

  function onClickMoveToBoardDetail(event) {
    // console.log(event.target.id)
    router.push(`/01-01-board/${event.target.id}`)
  }


  return (
    <BoardListUIPage
      data={props.data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
