import axios from 'axios'
import {useState} from 'react'
import { useMutation} from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from 'next/router'

export default function BoardWrite(props){
        const router = useRouter()
        
        const [isActive, setIsActive]=useState(false)

        const [myWriter, setMyWriter] = useState("")
        const [myTitle, setMyTitle] = useState("")
        const [myContents, setMyContnets] = useState("")

    
        const [aaa, setAaa] = useState("")
        const [qqq] = useMutation(CREATE_BOARD)
        const [www] = useMutation(UPDATE_BOARD)
    
        const zzz = async () => {
            const result = await qqq({ 
                variables: { writer: myWriter, title: myTitle, contents: myContents} 
            })
            console.log(result.data)
            console.log(result.data.createBoard.message)
            setAaa(result.data.createBoard.message)

            router.push(`/08-05-boards/${result.data.createBoard.number}`)
        }
    
        const xxx = async() => {
            console.log('수정하기를 클릭하셨군요!')
            const result = await www({
                variables:{ number : Number(router.query.mynumber), writer: myWriter, title: myTitle, contents: myContents}
            })
            console.log(result.data.updateBoard.message)
            router.push(`/08-05-boards/${router.query.mynumber}`)
        }





        const onChangeMyWriter = (event) => {
            setMyWriter(event.target.value)     //하나하나 입력할떄마다 저장이 됨 이떄 myWriter는 저장 전임 (초기값인 빈 공백상태)
            if (event.target.value && myTitle && myContents){
                setIsActive(true)
            }
        }
        const onChangeMyTitle = (event) => {
            setMyTitle(event.target.value)
            if (myWriter && event.target.value && myContents){          //each of them must be in event target value so that all the data are saved at each condition
                setIsActive(true)
            }
        }
        const onChangeMyContents = (event) => {
            setMyContnets(event.target.value)
            if (myWriter && myTitle && event.target.value){
                setIsActive(true)
            }
        }


        return (
            //여기에 AAAABBBB 써도 import 가능함 
           <BoardWriteUI
                bbb={aaa}
                ccc={zzz}
                xxx={xxx}
                ddd={onChangeMyWriter}
                eee={onChangeMyTitle}
                fff={onChangeMyContents}
                isActive={isActive}
                isEdit={props.isEdit}
           />
        )
       
    }
    //setState 비동기로 됨
    // 이건 마지막에 한꺼번에 몰아서 하기 때문에 setState도 비동기로 작동한다
    //무조건 비동기로 다 작동하는건 아니짐나 At least 여기선 우선 비동기로 작동

    //isEdit 전달전달
    