import axios from 'axios'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD} from './BoardWrite.queries'
import BoardUIPresenter from './BoardWrite.presenter'
// import {Wrapper, Title, 
//     AccountSection, Label, Writer, Password,
//     Longbox, Contents, InputWrapper,
//     AddressBtn, ZipcodeWrapper, Zipcode, ZipWrapper,
//     ImageWrapper, GreyBoxes, Box,BoxWord, 
//     OptionWrapper, RadioWrapper, RadioButton, ButtonWrapper, MyBtn, Your__Error} 
//     from '../../../../../styles/emotion';


export default function BoardContain(){
    const [isActive, setIsActive]=useState(false)

    const router = useRouter()

    const[writer, setWriter] = useState("");
    const[pw, setPw] = useState("");                            
    const[title, setTitle] = useState("");
    const[contents, setContents] = useState("");

    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeMyWriter(event){
        setWriter(event.target.value);
        if(writer.length>1){
            setMyWriterError("")
            setIsActive(true)
        }
    } 
    function onChangeMyPw(event){
        setPw(event.target.value);
        if(pw.length>7){
            setMyPasswordError("")
            setIsActive(true)
    }
}
    
    function onChangeMyTitle(event){
        setTitle(event.target.value);
        if(title.length>0){
            setMyTitleError("")
            setIsActive(true)
    }
}

    function onChangeMyContents(event){
        setContents(event.target.value);
        if(contents.length>9){
            setMyContentsError("")
            setIsActive(true)
    }
}

    const onClickSubmit = async () => {
        if (writer.length<2) {
            setMyWriterError("* 성을 포함하여 정확한 이름을 입력해주세요");
        } 
        if (pw.length<8) {
            setMyPasswordError("* 비밀번호를 8자 이상 입력해주세요");
        }
        if (title.length<1) {
            setMyTitleError("* 제목을 한 글자 이상 입력해주세요");
        }
        if (contents.length<10) {
            setMyContentsError("* 내용을 10자 이상 입력해주세요");
        }
        if (writer.length>1 
            && pw.length>7
            && title.length>0
            && contents.length>9) {
            alert("게시물이 등록됐습니다");


            
            const result = await createBoard({
                variables: {createBoardInput:{
                    writer: writer,
                    password: pw,
                    title: title,
                    contents: contents
                }
            }
            })

    router.push(`/01-01-board/${result.data.createBoard._id}`)

        }
    }

    return (
       <BoardUIPresenter
       myWriterError={myWriterError}
       myPasswordError={myPasswordError}
       myTitleError={myTitleError}
       myContentsError={myContentsError}
       
       onChangeMyWriter={onChangeMyWriter}
       onChangeMyPw={onChangeMyPw}
       onChangeMyTitle={onChangeMyTitle}
       onChangeMyContents={onChangeMyContents}
       onClickSubmit={onClickSubmit}
       
       isActive={isActive}

       isEdit={props.isEdit}
       />
    )

}