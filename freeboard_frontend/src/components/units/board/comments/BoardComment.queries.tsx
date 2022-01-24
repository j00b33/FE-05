import { gql } from "@apollo/client"

export  const CREATE_BOARD_COMMENT = gql`
    createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $BoardId = ID!){
        createBoardComment(createBoardCommentInput: $createBoardCommentInput, BoardId=$BoardId){
            _id
            writer
            contents
            createdAt
        }
    }
`