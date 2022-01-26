import {useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import BoardContain from '../../../../src/components/units/board/write/BoardWrite.container'


const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      title
      contents
      youtubeUrl
      boardAddress{
        zipcode
        address
        addressDetail
      }
    }
  }
`

export default function FreeBoardEdit(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables: {boardId: String(router.query.boardDetail)}
    })

    return <BoardContain 
    isEdit={true}
    data = {data}
    />
}