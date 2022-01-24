import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import BoardUIPresenter from './BoardWrite.presenter'

export default function BoardContain(props){
    const [isActive, setIsActive]=useState(false)

    const router = useRouter()

    const[myWriter, setMyWriter] = useState("");
    const[myPassword, setMyPassword] = useState("");                            
    const[myTitle, setMyTitle] = useState("");
    const[myContents, setMyContents] = useState("");

    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeMyWriter(event){
        setMyWriter(event.target.value);
        if(myWriter.length>1){
            setMyWriterError("")
            setIsActive(true)
        }else {
            setIsActive(false)
          }
    } 
    function onChangeMyPw(event){
        setMyPassword(event.target.value);
        if(myPassword.length>7){
            setMyPasswordError("")
            setIsActive(true)
    }else {
        setIsActive(false)
      }
}
    
    function onChangeMyTitle(event){
        setMyTitle(event.target.value);
        if(myTitle.length>0){
            setMyTitleError("")
            setIsActive(true)
    }else {
        setIsActive(false)
      }
}

    function onChangeMyContents(event){
        setMyContents(event.target.value);
        if(myContents.length>9){
            setMyContentsError("")
            setIsActive(true)
    }else {
        setIsActive(false)
      }
}

    const onClickSubmit = async () => {
        if (myWriter.length<2) {
            setMyWriterError("* 성을 포함하여 정확한 이름을 입력해주세요");
        } 
        if (myPassword.length<8) {
            setMyPasswordError("* 비밀번호를 8자 이상 입력해주세요");
        }
        if (myTitle.length<1) {
            setMyTitleError("* 제목을 한 글자 이상 입력해주세요");
        }
        if (myContents.length<10) {
            setMyContentsError("* 내용을 10자 이상 입력해주세요");
        }
        if (myWriter.length>1 
            && myPassword.length>7
            && myTitle.length>0
            && myContents.length>9) {
            alert("게시물이 등록됐습니다");
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                      writer: myWriter,
                      password: myPassword,
                      title: myTitle,
                      contents: myContents,
                    },
                  },
                })

    router.push(`/01-01-board/${result.data.createBoard._id}`)

        }
    }


    async function onClickUpdate(){
        interface IMyUpdateBoardInput{
            title?:string,
            contents?:string
        }

        const myUpdateBoardInput: IMyUpdateBoardInput = {}
      if(myTitle) myUpdateBoardInput.title = myTitle
      if(myContents) myUpdateBoardInput.contents = myContents
      await updateBoard({
        variables: {
          boardId: router.query.aaa,
          password: myPassword,
          updateBoardInput: myUpdateBoardInput
        },
      });
      alert("수정이 완료되었습니다.")
      router.push(`/boards/${router.query.aaa}`);
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