import BoardListUIPage from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT} from "./BoardList.queries";
import { useRouter } from "next/router";
import {useState} from 'react'
import { MouseEvent } from "react";


export default function BoardList() {
  const router = useRouter();
  function onClickMoveToBoardNew() {
    router.push("/01-01-board/new");
  }

  function onClickMoveToBoardDetail(event) {
    // console.log(event.target.id)
    router.push(`/01-01-board/${event.target.id}`)
  }




  const [currentPage, setCurrentPage] =useState(1)
  const [startPage, setStartPage] = useState(1)
  const {data, refetch} = useQuery(FETCH_BOARDS,{
      variables: {page : startPage}
  })

  const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)


  function onClickPage (event: MouseEvent<HTMLSpanElement>){
      refetch({ page: Number(event.target.id)})
      setCurrentPage(Number(event.target.id))
  }

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






  return (
    <BoardListUIPage
      data={data}

      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
      onClickPage={onClickPage}

      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
    />
  );
}
