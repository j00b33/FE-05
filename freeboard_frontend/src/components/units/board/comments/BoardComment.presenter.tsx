import * as C from './BoardComment.styles'
export default function BoardCommentUIPage(props){
    return(
        <C.Wrapper>
            
            <C.MyTitle>댓글</C.MyTitle>

                <C.InputWrapper>
                    <C.PInput type="text" placeholder="작성자" onChange={props.onChangeMyWriter}/>
                    <C.PInput type="text" placeholder="비밀번호" onChange={props.onChangeMyPassword}/>
                </C.InputWrapper>
            <C.CreateC>
                <C.MyWriting type="text"
                    placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
                    onChange={props.onChangeMyContents}
                ></C.MyWriting>
            <C.SubmitBtn onClick={props.onClickSubmit}>등록</C.SubmitBtn>
            </C.CreateC>

            {props.data?.fetchBoardComments.map((el) => (
            <C.Comments key={el._id}>
                <C.Writer>{el?.writer}</C.Writer>
                <C.WriterComment>{el?.contents}</C.WriterComment>
                <C.DivisionLine></C.DivisionLine>
            </C.Comments>
            ))}
        </C.Wrapper>
    )
}

//.slice(0,10)