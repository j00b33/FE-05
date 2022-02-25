import * as D from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { VscLocation } from "react-icons/vsc";
import { BiLike, BiDislike } from "react-icons/bi";

export default function BoardDetailUIPage(props) {
  return (
    <div>
      <D.MyWrapper>
        <D.MyHeader>
          <D.HeaderLine>
            <D.MyWriter>{props.data?.fetchBoard?.writer}</D.MyWriter>
            <D.MyDate>
              {props.data?.fetchBoard?.createdAt.slice(0, 10)}
            </D.MyDate>
          </D.HeaderLine>

          <D.LocationWrapper>
            <Tooltip
              color="#9900ff"
              font-size="16px"
              font-family="CodaCaption"
              title={`${props.data?.fetchBoard.boardAddress?.address} 
                ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <D.AddressTool>
                {" "}
                <VscLocation />{" "}
              </D.AddressTool>
            </Tooltip>
          </D.LocationWrapper>
        </D.MyHeader>

        <D.DivisionL />

        <D.MyBody>
          <D.MyTitle>{props.data?.fetchBoard?.title}</D.MyTitle>

          <D.PicWrapper>
            <D.MainPic
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images?.[0]}`}
              width="450px"
            />
          </D.PicWrapper>

          <D.MyContents>{props.data?.fetchBoard?.contents}</D.MyContents>
          {props.data?.fetchBoard.youtubeUrl && (
            <D.MyYoutube
              url={props.data?.fetchBoard.youtubeUrl}
              width="500px"
              height="300px"
            />
          )}
        </D.MyBody>

        <D.LikeWrapper>
          <D.IconWrapper>
            <D.Like onClick={props.onClickLike}>
              <BiLike />
            </D.Like>
            <D.LikeCount>{props.likeCount}</D.LikeCount>
          </D.IconWrapper>

          <D.IconWrapper>
            <D.Dislike onClick={props.onClickDislike}>
              <BiDislike />
            </D.Dislike>
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
  );
}
