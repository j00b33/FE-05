import { BiEditAlt, BiMessageAltAdd } from "react-icons/bi";
import { BiEraser } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroller";
import AnswerPage from "../../../../../pages/01-01-market/answer";
import * as C from "./comment.styles";
import CommentList from "./comment.list.presenter";
import { Modal } from "antd";

export default function MarketCommentUIPage(props) {
  return (
    <C.Wrapper>
      <C.MyTitle>Comments</C.MyTitle>
      <C.CreateC>
        <C.Input
          type="text"
          placeholder="Enter Your Comment Here."
          onChange={props.onChangeContents}
          value={props.contents}
        ></C.Input>
        <C.SubmitBtn onClick={props.onClickSubmit}>Comment</C.SubmitBtn>
      </C.CreateC>

      <C.FetchWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.questionData?.fetchUseditemQuestions.map((el) => (
            <CommentList
              key={el._id}
              el={el}
              onClickAddAnswer={props.onClickAddAnswer}
              isAdd={props.isAdd}
              onClick={props.onClickDelete}
              questionData={props.questionData}
            />
          ))}
        </InfiniteScroll>
      </C.FetchWrapper>

      <C.ScrollMore>*Scroll to see more comments*</C.ScrollMore>
    </C.Wrapper>
  );
}
