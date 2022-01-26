import BoardCommentUIPage from "./BoardComment.presenter";
import { useState } from "react";
import { useMutation, useQuery} from "@apollo/client";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardComment.queries"; 
import { useRouter } from "next/router";
import { Modal} from 'antd';
import 'antd/dist/antd.css'


export default function BoardCommentPage(){
    const router = useRouter()

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardDetail) },
  });
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

    const [isOpen, setIsOpen] = useState(false)
    const [selectedId, setSelectedId] = useState("")


    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myContents, setMyContents] = useState("");
    const [star, setStar] = useState(0)

    function onChangeMyWriter(event){
        setMyWriter(event.target.value);
        }

    function onChangeMyPassword(event){
        setMyPassword(event.target.value);
        }

    function onChangeMyContents(event){
        setMyContents(event.target.value);
        }

    function onChangeStar (value) {
        setStar(value)
    }

    async function onClickSubmit() {
        if (myWriter && myPassword && myContents){
        await createBoardComment({
            variables: {
                createBoardCommentInput: {
                    writer: myWriter,
                    password: myPassword,
                    contents: myContents,
                    rating: star
              },
                boardId: String(router.query.boardDetail)
              },
              refetchQueries : [{
                  query: FETCH_BOARD_COMMENTS,
                  variables: {
                      boardId: String(router.query.boardDetail)
                  }
              }]
            })
            setMyPassword("")
            setMyContents("")
            setStar(0)
        }
    }


    function onChangeDeletePassword(event) {
        setMyPassword(event.target.value);
      }
    
    function onClickOpenDeleteModal(event){
        setIsOpen(true)
        setSelectedId(event.target.id)
    }

    async function onClickDelete(event){
        try{
        await deleteBoardComment({
            variables: {
                password: myPassword,
                boardCommentId: selectedId
            },
            refetchQueries : [{
                query: FETCH_BOARD_COMMENTS,
                variables: {boardId: router.query.boardDetail}
            }]
        })
        setIsOpen(false)
    }catch(error){
        alert(error.message)
        }
    }


    // async function onclickEditCom(){
    //     await updateBoardComment({
    //         variables: {
    //             updateBoardCommentInput: myContents,
    //             password: myPassword
    //         }
    //     })
    // }



    return(
        <BoardCommentUIPage
        data={data}

        myPassword={myPassword}
        myContents={myContents}
        star={star}

        onChangeMyWriter={onChangeMyWriter}
        onClickSubmit={onClickSubmit}
        onChangeMyPassword={onChangeMyPassword}
        onChangeMyContents={onChangeMyContents}
        onChangeStar={onChangeStar}

        // onclickEditCom={onclickEditCom}

        onClickDelete={onClickDelete}
        onClickOpenDeleteModal={onClickOpenDeleteModal}
        onChangeDeletePassword={onChangeDeletePassword}
        isOpen={isOpen}
        />
    )
}




      