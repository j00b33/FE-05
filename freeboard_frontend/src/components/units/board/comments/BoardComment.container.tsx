import BoardCommentUIPage from "./BoardComment.presenter";
import { useState } from "react";
import { useMutation} from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./BoardComment.queries"; 

// interface IsActive:IIsActive {

// }

export default function BoardCommentPage(){

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

    const [isActive, setIsActive] = useState("")
    const [myComment, setMyComment] = useState("")

    function onChangeMyWriting(event){
        setMyComment(event.target.value);
        // if (myComment === ""){
        //     setIsActive(false)
        // } else {
        //     setIsActive(true)
        // }
        }

    const onClickSubmit = async(event) => {
        alert("댓글이 등록되었습니다")
        const result = await createBoardComment({
            variables: {
                createBoardCommentInput: {
                  contents: myComment
                },
              },
            })
    }

    return(
        <BoardCommentUIPage
        onChangeMyWriting={onChangeMyWriting}
        onClickSubmit = {onClickSubmit}
        />
    )
}