import * as C from './BoardComment.styles'

export default function BoardCommentUIPage(props){
    return(
        <C.Wrapper>
            <C.MyTitle>댓글</C.MyTitle>
            <C.Stars>별점이 들어갈 공간입니다</C.Stars>
            <C.MyComment>
                <C.MyWriting type="text" 
                placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
                onChange={props.onChangeMyWriting}
                ></C.MyWriting>
                <C.SubmitBtn onClick={props.onClickSubmit}>등록하기</C.SubmitBtn>
            </C.MyComment>

            {props.data?.fetchBoard?.map((el) => (
            <C.Comments key={el._id}>
                <C.Writer>{el.writer}</C.Writer>
                <C.WriterComment>{el.contents}</C.WriterComment>
                <C.WriterDate>{el.createAt.slice(0,10)}</C.WriterDate>
                <C.WriterId>{el._id}</C.WriterId>
                <C.DivisionLine></C.DivisionLine>
            </C.Comments>
            ))}

        </C.Wrapper>
    )
}