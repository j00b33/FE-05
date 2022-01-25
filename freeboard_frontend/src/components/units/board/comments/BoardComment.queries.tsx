import { gql } from "@apollo/client"

export  const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId : ID!){
        createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId){
            _id
            writer
            contents
            createdAt
        }
    }
`

export  const FETCH_BOARD_COMMENT = gql`
    query fetchBoardComments($page: Int, $boardId : ID!){
        fetchBoardComments(page: $page, boardId: $boardId){
            _id
            writer
            contents
            createdAt
        }
    }
`