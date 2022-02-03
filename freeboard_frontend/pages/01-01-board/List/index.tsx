import { gql, useQuery } from '@apollo/client'
import Pagination from '../../../src/components/commons/pagination/01/pagination.container'
import BoardListPage from '../../../src/components/board/units/list/BoardList.container'

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            images
            createdAt
            updatedAt
            deletedAt
        }
    }
`

export default function BoardList (){

    const {data, refetch} = useQuery (FETCH_BOARDS,{
        variables: {page : 1}
      })
    
      const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
      const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    

    return (
        <div>
        <BoardListPage data={data}/>
        <Pagination refetch={refetch} lastPage={lastPage}/>
        </div>
    )
}