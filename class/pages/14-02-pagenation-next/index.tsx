import {gql, useQuery} from '@apollo/client'
import {useState} from 'react'

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards (page: $page){
            _id
            writer
            title
        }
    }
`

export default function PageNationNextPage(){

    const [startPage, setStartPage] = useState(1)
    //초기값 1페이지

    const {data, refetch} = useQuery(FETCH_BOARDS,{
        variables: {page : 1}
    })

    const onClickPage = (event) =>{
        refetch({ page: Number(event.target.id)})
        //refetch 하면 최종적으로 {data}가 바뀜
    }

    const onClickPrevPage = () => {
        setStartPage(prev => prev - 10)
        //전 값에서 10을 빼주면 그게 startPage값
        // === startPage - 1 이랑 같은 기능
    }

    const onClickNextPage = () => {
        setStartPage(Prev => Prev +10)
    }

    return(
        <div>
            <h1>Page Nation Practice</h1>
            {data?.fetchBoards?.map((el) =>(
                <div key={el._id}>{el.title} {el.writer}</div>
            ))}

            <span onClick={onClickPrevPage}>이전페이지</span>

            {new Array(10).fill(1).map((_, index) => (
                <span  key={index + startPage} onClick={onClickPage} id={String(index + startPage)}> 
                {` ${index + startPage} `}
                </span>
            ))}

            <span onClick={onClickNextPage}>다음페이지</span>
        </div>

    )

}