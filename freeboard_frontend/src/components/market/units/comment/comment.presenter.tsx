import * as C from "./comment.styles";

export default function MarketCommentUIPage(props) {
  return (
    <C.Wrapper>
      <C.MyTitle>Comments</C.MyTitle>
      <C.CreateC>
        <C.MyWriting
          type="text"
          placeholder="Enter Your Comment Here."
          onChange={props.onChangeContents}
          value={props.contents}
        ></C.MyWriting>
        <C.SubmitBtn onClick={props.onClickSubmit}>Comment</C.SubmitBtn>
      </C.CreateC>
    </C.Wrapper>
  );
}
