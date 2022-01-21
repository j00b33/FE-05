import * as D from './BoardDetail.styles'
export default function BoardListUIPage(){

return(
    <D.Wrapper>
        <D.HeaderLine></D.HeaderLine>
            <D.HeadRow>
                <D.HeadType>번호</D.HeadType>
                <D.HeadType>제목</D.HeadType>
                <D.HeadType>작성자</D.HeadType>
                <D.HeadType>날짜</D.HeadType>
            </D.HeadRow>

            
        {data?.fetchBoards?.map((el)=>(
            <D.Row key={el.number}>
                <D.DivisionLine></D.DivisionLine>
                <D.Column>
                    <D.MyNumber>{el.number}</D.MyNumber>
                    <D.MyTitle>{el.title}</D.MyTitle>
                    <D.MyWriter>{el.writer}</D.MyWriter>
                    <D.MyDate>{el.createdAt.slice(0,10)}</D.MyDate>             
                </D.Column>
            </D.Row>
        ))}
    </D.Wrapper>
)
}