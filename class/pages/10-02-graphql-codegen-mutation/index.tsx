import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import {IMutation, IMutationCreateBoardArgs} from '../../src/commons/types/generated/types'
import React from 'react'
const CREATE_BOARD = gql`
mutation {
    createBoard(writer: "JB" , title: "Assignment", contents: "!@#$%"){
        _id
        number
        message
}
  }
`

//위에서 받은걸 아래에 효율적으로 (묶음요청 가능) 보내기 위해 $writer 은 writer에 전달 해줌


export default function GraphqlMutation(){
    const [aaa, setAaa] = useState<string>("")
    const [qqq] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs>(CREATE_BOARD)
                     
    const onClickButton = async() => {
        const result =  await qqq()     
        //createBoard만나는 순간 backend에 요청해서 database에 가서 data를 꺼내가지고 옴 그래ㅔ서 다시 createBoard에 돌려줌 그리고 그걸 result애 넣어주는것
        // console.log(result) -->콘솔에 데이터 잘 저장됐는지 확인용
        
        
        // console.log(result.data.createBoard.message)
        setAaa(result.data?.createBoard?.message || "아무 string")
        //게시물이 정상적으로 등록되었습니다.
    }

    return(
        <>
            <button onClick={onClickButton}>REST-API 요청하기</button>
            <div>{aaa}</div>
        </>
        )
}