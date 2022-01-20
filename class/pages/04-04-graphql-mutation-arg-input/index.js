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
export default function GraphqlMutation(){
    const [myWriter, setMyWriter]=useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [aaa, setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async() => {
        const result =  await qqq({ 
        variables: {writer: myWriter , title: myTitle, contents: myContents}
        }) 
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }
    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
    } 
    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
    }
    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
    }
    return(
        <>
        작성자: <input type= "text" onChange={onChangeMyWriter} /><br/>
        제목: <input type= "text" onChange={onChangeMyTitle}/><br/>
        내용: <input type= "text" onChange={onChangeMyContents}/><br/>
            <button onClick={zzz}>REST-API 요청하기</button>
            <div>{aaa}</div>
        </>
        )
}