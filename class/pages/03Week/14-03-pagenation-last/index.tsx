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
const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`
//따로 객제형태로 받아오는게 아니라서 여기까지만 적어도 됨

export default function PageNationLastPage(){

    const [startPage, setStartPage] = useState(1)
    const {data, refetch} = useQuery(FETCH_BOARDS,{
        variables: {page : startPage}
    })

    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
    //앞에 데이터가 두개라서 data 속성을 바꿔줘야함
    // : dataBoardsCount로 
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    // BoardsCount안에 값이 들어가있을텐데 아직 요청을 받아오는 중일 수 있기 떄문에 optional chaining 사용
    // --> lastPage에 걸리면 못넘어가게끔 만들어주기 위해서 마지막 페이지를 구하는것
    
    
    const onClickPage = (event) =>{
        refetch({ page: Number(event.target.id)})
        //refetch 하면 최종적으로 {data}가 바뀜
    }

    const onClickPrevPage = () => {
        if (startPage === 1){
            return //함수 종료 아래쪽 실행 안되고 끝남
        }
        setStartPage(prev => prev - 10)
        refetch({page : startPage - 10})
        //이전 페이지 눌렀을때 해당하는 시작페이지로 이동함
    }

    const onClickNextPage = () => {
        if (startPage + 10> lastPage){
            return
        }
        setStartPage(Prev => Prev +10)
        refetch({page : startPage + 10})
        //다음 페이지 눌렀을때 해당하는 시작페이지로 이동함
    }

    return(
        <div>
            <h1>Page Nation Practice</h1>
            {data?.fetchBoards?.map((el) =>(
                <div key={el._id}>{el.title} {el.writer}</div>
            ))}

            <span onClick={onClickPrevPage}>이전페이지</span>

            {new Array(10).fill(1).map(
                (_, index) => 
                    startPage + index <= lastPage &&(
                        <span  
                        key={index + startPage} 
                        onClick={onClickPage} 
                        id={String(index + startPage)}
                        > 
                            {` ${index + startPage} `}
                        </span> 
                )
            )}

            <span onClick={onClickNextPage}>다음페이지</span>
        </div>

    )

}


// 1페이지 마지막 페이지 이전 이후로는 못가게끔 만들어줘야함
// 4라는걸 state에 저장해놓고 4에 맞으면 색깔 바꾸기 뭐 이런거