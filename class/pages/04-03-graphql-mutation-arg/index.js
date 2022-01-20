


import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String){

    createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
    }


  }
`


//위에서 받은걸 아래에 효율적으로 (묶음요청 가능) 보내기 위해 $writer 은 writer에 전달 해줌


export default function GraphqlMutation(){

    const [aaa, setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async() => {
        // const result = await axios.get('http://koreanjson.com/posts/1')
        const result =  await qqq({ 
        variables: {writer: "JB" , title: "Assignment", contents: "!@#$%"}
        }) 
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }

    return(
        <>
            <button onClick={zzz}>REST-API 요청하기</button>
            <div>{aaa}</div>
        </>
        )
}