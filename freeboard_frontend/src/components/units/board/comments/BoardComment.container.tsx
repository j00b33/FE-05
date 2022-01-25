import BoardCommentUIPage from "./BoardComment.presenter";
import { useState } from "react";
import { useMutation, useQuery} from "@apollo/client";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENT } from "./BoardComment.queries"; 
import { useRouter } from "next/router";


export default function BoardCommentPage(){
    const router = useRouter()

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const { data } = useQuery(FETCH_BOARD_COMMENT, {
    variables: { boardId: String(router.query.boardDetail) },
  });

    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myContents, setMyContents] = useState("");

    function onChangeMyWriter(event){
        setMyWriter(event.target.value);
        }

    function onChangeMyPassword(event){
        setMyPassword(event.target.value);
        }

    function onChangeMyContents(event){
        setMyContents(event.target.value);
        }
    
    async function onClickSubmit() {
        alert("댓글이 등록되었습니다")
        console.log("check", data)
        await createBoardComment({
            variables: {
                createBoardCommentInput: {
                    writer: myWriter,
                    password: myPassword,
                    contents: myContents,
                    rating: 0
              },
                boardId: String(router.query.boardDetail)
              },
              refetchQueries : [{
                  query: FETCH_BOARD_COMMENT,
                  variables: {
                      boardId: String(router.query.boardDetail)
                  }
              }]
            })
    }

    return(
        <BoardCommentUIPage
        data={data}
        onChangeMyWriter={onChangeMyWriter}
        onClickSubmit = {onClickSubmit}
        onChangeMyPassword={onChangeMyPassword}
        onChangeMyContents={onChangeMyContents}
        />
    )
}