import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import BoardUIPresenter from './BoardWrite.presenter'
import { Modal } from "antd";
import 'antd/dist/antd.css'
import DaumPostcode from 'react-daum-postcode';

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

    const [youtubeUrl, setYoutubeUrl] = useState("");

    const [zipcode, setZipcode] = useState("");
    const [address, setAddress]= useState("")
    const [addressDetail, setAddressDetail] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

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

    function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>){
        setYoutubeUrl(event.target.value)
    }

    function onClickAddress (event){
        setAddressDetail(event.target.value)
    }
        const [isModalVisible, setIsModalVisible] = useState(false);
        const showModal = () => {
            setIsModalVisible(true);
        };

        const handleOk = () => {
            setIsModalVisible(false);
        };

        const handleCancel = () => {
            setIsModalVisible(false);
        };

        const onCompleteDaumPostCode = (data: any) =>{
            setAddress(data.address)
            setZonecode(data.zonecode)
            setIsModalVisible(false)
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
                Modal.success({ content: "게시물이 등록되었습니다" })
                const result = await createBoard({
                variables: {
                    createBoardInput: {
                      writer: myWriter,
                      password: myPassword,
                      title: myTitle,
                      contents: myContents,
                      youtubeUrl: youtubeUrl,
                      boardAddress:{
                          zipcode: zipcode,
                          address: address, 
                          addressDetail: addressDetail
                      }
                    },
                  },
                })

    router.push(`/01-01-board/${result.data.createBoard._id}`)
            
        }
    }
    const onClickUpdate = async () => {
        if (!myTitle && !myContents && !youtubeUrl){
            Modal.error({ content: "하나는 수정해야합니다" })
        }
        if (!myPassword){
            Modal.error({ content: "비밀번호를 입력해주세요" })
        }

        interface IMyUpdateBoardInput {
            title?: string
            contents?: string
            youtubeUrl?: string
          }
          const myUpdateBoardInput: IMyUpdateBoardInput = {}
          if(myTitle) myUpdateBoardInput.title = myTitle
          if(myContents) myUpdateBoardInput.contents = myContents
          if(youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl
    
          try{
      await updateBoard({
        variables: {
          boardId: router.query.boardDetail,
          password: myPassword,
          updateBoardInput: myUpdateBoardInput
        },
      });
      Modal.success({ content: "수정이 완료되었습니다" })
      router.push(`/01-01-board/${router.query.boardDetail}`);
    }catch(error){
        Modal.error({content: "수정에 오류가 생겼습니다"})
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
       onChangeYoutubeUrl={onChangeYoutubeUrl}

       onClickSubmit={onClickSubmit}
       onClickUpdate={onClickUpdate}
       
       data={props.data}
       isActive={isActive}
       isEdit={props.isEdit}




       isModalVisible={props.isModalVisible}
       showModal={props.showModal}
       handleOk={props.handleOk}
       handleCance={props.handleCancel}
       onCompleteDaumPostCode={props.onCompleteDaumPostCode}
       />
    )

}