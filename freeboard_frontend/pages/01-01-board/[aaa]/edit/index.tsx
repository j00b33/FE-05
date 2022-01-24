import { Router, useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import BoardContain from '../../../../src/components/units/board/write/BoardWrite.container'


const FETCH_BOARD = gql`
    query fetchBoard($number: Int, $BoardId: ID!){
        fetchBoard(number: $numberBoardID:$BoardId){
            writer
            title
            contents
        }
    }
`


export default function FreeBoardEdit(){
    const router = useRouter()

    //1. router로 해당 게시글 fetchBoard
    const {data} = useQuery(FETCH_BOARD,{
        variables: {number: Number(router.query.aaa)}
    })

    return <BoardContain 
    isEdit={true}
    data = {data}
    />
}