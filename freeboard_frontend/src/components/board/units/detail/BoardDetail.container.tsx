import BoardDetailUIPage from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardCommentPage from "../comments/BoardComment.container";
import { Modal } from "antd";

export default function BoardDetailPage(props) {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardDetail) },
  });

  const onClickMovetoList = () => {
    router.push("/01-01-board/list");
  };

  const onClickMoveToEdit = () => {
    router.push(`/01-01-board/${router.query.boardDetail}/edit`);
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: { boardId: String(router.query.boardDetail) },
    });
    Modal.success({ content: "게시글이 삭제되었습니다" });
    router.push("/01-01-board/list");
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardDetail) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardDetail) },
        },
      ],
    });
  };

  console.log(data);
  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardDetail) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardDetail) },
        },
      ],
    });
  };

  return (
    <>
      <BoardDetailUIPage
        data={data}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickMovetoList={onClickMovetoList}
        onClickDelete={onClickDelete}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
        likeCount={data?.fetchBoard.likeCount}
        dislikeCount={data?.fetchBoard.dislikeCount}
        keyword={props.keyword}
      />
      <BoardCommentPage />
    </>
  );
}
