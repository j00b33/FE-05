import Boards from "../../src/components/units/14-05-boards-pagenation/Board";
import Pagination from "../../src/components/units/14-05-boards-pagenation/Pagination";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards (page: $page){
            _id
            writer
            title
        }
    }
`

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`


export default function PageNationLastPage(){
    
    const {data, refetch} = useQuery(FETCH_BOARDS,{
        variables: {page : 1}
    })

    const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)  

    return(
        <div>
            <h1>페이지네이션 연습</h1>
            <Boards data={data}/>
            <Pagination refetch={refetch} lastPage={lastPage}/>
        </div>
    )

}