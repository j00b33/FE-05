import * as D from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { VscLocation } from "react-icons/vsc";
import { BiLike, BiDislike } from "react-icons/bi";
import BoardCommentPage from "../comments/BoardComment.container";

export default function BoardDetailUIPage(props) {
  return (
    <D.Wrapper>
      <D.TopDetail>
        <D.RightSection>
          <D.MainPic
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images?.[0]}`}
            onError={(e) => (e.currentTarget.src = "/white.png")}
          />
        </D.RightSection>

        <D.LeftSection>
          <D.LeftHeader>
            <D.MyTitle>{props.data?.fetchBoard?.title}</D.MyTitle>
            <D.SubHeader>
              <D.MyDate>
                {props.data?.fetchBoard?.createdAt.slice(0, 10)}
              </D.MyDate>
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
            </D.SubHeader>
          </D.LeftHeader>
          <D.DivisionL />
          <D.LeftBody>
            <D.MyWriter>Writer: {props.data?.fetchBoard?.writer}</D.MyWriter>
            <D.MyContents>{props.data?.fetchBoard?.contents}</D.MyContents>
          </D.LeftBody>
          <D.DivisionL />
        </D.LeftSection>
      </D.TopDetail>

      {props.data?.fetchBoard.youtubeUrl && (
        <D.MyYoutube
          url={props.data?.fetchBoard.youtubeUrl}
          width="600px"
          height="335px"
        />
      )}

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

      <D.PageBottom>
        <D.MyBtn onClick={props.onClickMovetoList}>List</D.MyBtn>
        <D.MyBtn onClick={props.onClickMoveToEdit}>Edit</D.MyBtn>
        <D.MyBtn onClick={props.onClickDelete}>Delete</D.MyBtn>
      </D.PageBottom>

      <BoardCommentPage />
    </D.Wrapper>
  );
}
