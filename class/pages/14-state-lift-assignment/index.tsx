import {gql, useQuery} from '@apollo/client'
import {useState} from 'react'
import styled  from '@emotion/styled'
import { MouseEvent } from 'react';

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

const  NextPage = styled.button`
    cursor: pointer;
    :hover {
        color: #90bfeb;
        background-color: #636363;
    }
`
const Pages = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    &.isNow  {
        color: #90bfeb;
        }
`

const TextList = styled.span`
width: 700px;
display: flex;
flex-direction: row;
justify-content: space-between;
`






export default function PageNationLastPage(){

    const [currentPage, setCurrentPage] =useState(1)

    const [startPage, setStartPage] = useState(1)
    //초기값 1페이지
    const {data, refetch} = useQuery(FETCH_BOARDS,{
        variables: {page : startPage}
    })

    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) =>{
        refetch({ page: Number(event.target.id)})
        setCurrentPage(Number(event.target.id))
    }
    
        console.log(currentPage)

    const onClickPrevPage = () => {
        if (startPage === 1){
            return
        }
        setStartPage(prev => prev - 10)
        refetch({page : startPage - 10})

    }

    const onClickNextPage = () => {
        if (startPage + 10 > lastPage){
            return
        }
        setStartPage(Prev => Prev +10)
        refetch({page : startPage + 10})
    }



    return(
        <div>
            <h1>Page Nation Practice</h1>
            {data?.fetchBoards?.map((el) =>(
                <div key={el._id}>{el.title} {el.writer}</div>
            ))}
            <TextList>
            {startPage !== 1 && (
            <NextPage onClick={onClickPrevPage}>
            ＜
            </NextPage> 
            )}
            
            
            {new Array(10).fill(1).map(
                (_, index) => 
                    startPage + index <= lastPage &&(
                        <Pages  
                        key={index + startPage} 
                        onClick={onClickPage}
                        id={String(index + startPage)}
                        className={index + startPage === currentPage ? "isNow" : ""}
                        > 
                            {` ${index + startPage} `}
                        </Pages> 
                )
            )}
        {startPage +  10 > lastPage || (
            <NextPage onClick={onClickNextPage}>＞</NextPage> )}
            </TextList> 
        </div>

    )

}