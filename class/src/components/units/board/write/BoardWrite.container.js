import axios from 'axios'
// qqq 로 요청해도 API axios 받아오기 가능해짐
import {useState} from 'react'
import { useMutation} from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.queries'



//중괄호를 주지 않고 있음: 기본값이기 때문 (골라서 받는게 아니라면 무조건 default로 쓰임)
// AAAABBBB 로 써도 사용 가능

//자식컴포넌트 import 해주고 리턴에 자식컴포넌트 연결해주기

//햔위치 알려줌



export default function BoardWrite(){
        const [isActive, setIsActive]=useState(false)

        const [myWriter, setMyWriter] = useState("")
        const [myTitle, setMyTitle] = useState("")
        const [myContents, setMyContnets] = useState("")

    
        const [aaa, setAaa] = useState("")
        const [qqq] = useMutation(CREATE_BOARD)
    
        const zzz = async () => {
            // const result = await axios.get("https://koreanjson.com/posts/1")
                                    // qqq.get 으로 대체 가능 It works anyway.
            const result = await qqq({ 
                variables: { writer: myWriter, title:"제목입니다~", contents: "내용이에요~~" } 
            })
            console.log(result.data.createBoard.message)
            setAaa(result.data.createBoard.message)
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
                ddd={onChangeMyWriter}
                eee={onChangeMyTitle}
                fff={onChangeMyContents}
                isActive={isActive}
           />
        )
       
    }
    //setState 비동기로 됨
    // 이건 마지막에 한꺼번에 몰아서 하기 때문에 setState도 비동기로 작동한다
    //무조건 비동기로 다 작동하는건 아니짐나 At least 여기선 우선 비동기로 작동
    