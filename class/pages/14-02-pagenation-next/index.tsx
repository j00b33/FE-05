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
            
            {/* 
            //이렇게 따로따로 다 해줘도 되긴 하지만 더 간략하게 하기 위해서 윗방법 사용
            <span onClick={onClickPage} id="1"> 1 </span>
            <span onClick={onClickPage} id="2"> 2 </span>
            <span onClick={onClickPage} id="3"> 3 </span>
            */}
        </div>

    )

}