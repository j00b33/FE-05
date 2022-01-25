import * as D from './BoardList.Styles'
export default function BoardListUIPage(props){

return(
    <D.Wrapper>
        <D.HeaderLine/>
            <D.HeadRow>
                <D.HeadType>번호</D.HeadType>
                <D.HeadType>제목</D.HeadType>
                <D.HeadType>작성자</D.HeadType>
                <D.HeadType>날짜</D.HeadType>
            </D.HeadRow>

            
        {props.data?.fetchBoards?.map((el)=>(
            <D.Row key={el._id}>
                <D.DivisionLine></D.DivisionLine>
                <D.Column>
                    <D.MyNumber>{el._id}</D.MyNumber>
                    <D.MyTitle onClick={props.onClickMoveToBoardDetail}>{el.title}</D.MyTitle>
                    <D.MyWriter>{el.writer}</D.MyWriter>
                    <D.MyDate>{el.createdAt.slice(0,10)}</D.MyDate>             
                </D.Column>
            </D.Row>
        ))}
        <D.ListButton onClick={props.onClickMoveToBoardNew}>
            <D.Button>
                게시물 등록하기
            </D.Button>
        </D.ListButton>
    </D.Wrapper>
)
}