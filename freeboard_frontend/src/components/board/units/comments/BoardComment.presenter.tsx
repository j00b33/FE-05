import * as C from "./BoardComment.styles";
import { Modal } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentUIPage(props) {
  return (
    <C.Wrapper>
      <C.MyTitle>Comments</C.MyTitle>

      <C.InputWrapper>
        <C.PInput
          type="text"
          placeholder="Writer"
          onChange={props.onChangeMyWriter}
        />
        <C.PInput
          type="password"
          placeholder="Password"
          onChange={props.onChangeMyPassword}
          value={props.myPassword}
        />
        <C.Star onChange={props.onChangeStar} value={props.star} />
      </C.InputWrapper>
      <C.CreateC>
        <C.MyWriting
          type="text"
          placeholder="Enter Your Comment Here."
          onChange={props.onChangeMyContents}
          value={props.myContents}
        ></C.MyWriting>
        <C.SubmitBtn onClick={props.onClickSubmit}>Comment</C.SubmitBtn>
      </C.CreateC>

      {props.isOpen && (
        <Modal visible={true} onOk={props.onClickDelete}>
          <div>Enter Your Password</div>
          <C.PInput type="password" onChange={props.onChangeDeletePassword} />
        </Modal>
      )}

      <C.CommentsWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <C.Comments key={el._id}>
              <C.WrittenStar value={el?.rating} disabled />
              <C.Writer>{el?.writer}</C.Writer>
              <C.WriterComment>{el?.contents}</C.WriterComment>
              <C.DivisionLine></C.DivisionLine>

              <C.Update>
                <C.CommentEdit onClick={props.onClickEditCom}>
                  <GrEdit />
                </C.CommentEdit>
                <C.Delete id={el._id} onClick={props.onClickOpenDeleteModal}>
                  <RiDeleteBinLine />
                </C.Delete>
              </C.Update>
            </C.Comments>
          ))}
        </InfiniteScroll>
      </C.CommentsWrapper>
      <C.CommentAlert> * Scroll to See More Comments * </C.CommentAlert>
    </C.Wrapper>
  );
}
