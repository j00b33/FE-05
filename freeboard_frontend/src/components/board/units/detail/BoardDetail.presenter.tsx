import * as D from './BoardDetail.styles'
import { Tooltip } from 'antd';
import {VscLocation} from 'react-icons/vsc'
import {BiLike, BiDislike} from 'react-icons/bi'

export default function BoardDetailUIPage(props){
    return (
    <div>
        <D.MyWrapper>
            <D.MyHeader>
                <D.HeaderLine>
                    <D.MyWriter>{props.data?.fetchBoard?.writer}</D.MyWriter>
                    <D.MyDate>{props.data?.fetchBoard?.createdAt.slice(0,10)}</D.MyDate>
                </D.HeaderLine>

                <D.LocationWrapper>
                <Tooltip 
                color="#b81a39" font-size="16px" font-family="Cochin"
                title={`${props.data?.fetchBoard.boardAddress?.address} 
                ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
                >
                <D.AddressTool> <VscLocation/> </D.AddressTool>
                </Tooltip>
                </D.LocationWrapper>

            </D.MyHeader>    

            <D.DivisionL/>

            <D.MyBody>
                <D.MyTitle>{props.data?.fetchBoard?.title}</D.MyTitle>
                <D.MainPic src='/userInput.jpg'/>
                <D.MyContents>{props.data?.fetchBoard?.contents}</D.MyContents>
                {props.data?.fetchBoard.youtubeUrl && (
                    <D.MyYoutube
                        url={props.data?.fetchBoard.youtubeUrl}
                        width= "486px"
                        height= "240px"
                    />
                )}
            </D.MyBody>

            <D.LikeWrapper>
                <D.IconWrapper>
                    <D.Like onClick={props.onClickLike}><BiLike/></D.Like>
                    <D.LikeCount>{props.likeCount}</D.LikeCount>
                </D.IconWrapper>

                <D.IconWrapper>
                    <D.Dislike onClick={props.onClickDislike}><BiDislike/></D.Dislike>
                    <D.DislikeCount>{props.dislikeCount}</D.DislikeCount>
                </D.IconWrapper>

            </D.LikeWrapper>
        </D.MyWrapper>

            <D.PageBottom>
                <D.MyBtn onClick={props.onClickMovetoList}>List</D.MyBtn>
                <D.MyBtn onClick={props.onClickMoveToEdit}>Edit</D.MyBtn>
                <D.MyBtn onClick={props.onClickDelete}>Delete</D.MyBtn>
            </D.PageBottom>
    </div>
    )
} 