import * as D from './BoardDetail.styles'

export default function BoardDetailUIPage(props){
    return (
    <div>
        <D.MyWrapper>
            <D.MyHeader>
                    <D.HeaderLine>
                    <D.MyWriter>{props.data?.fetchBoard?.writer}</D.MyWriter>
                    <D.MyDate>{props.data?.fetchBoard?.createdAt}</D.MyDate>
                </D.HeaderLine>

            </D.MyHeader>                
            <D.DivisionL/>
            <D.MyBody>
                <D.MyTitle>{props.data?.fetchBoard?.title}</D.MyTitle>
                <D.MainPic src='/images/boardpic/mainpic.png'/>
                <D.MyContents>{props.data?.fetchBoard?.contents}</D.MyContents>
            </D.MyBody>
            
        </D.MyWrapper>

            <D.PageBottom>
                <D.MyBtn onClick={props.onClickMoveToList}>목록으로</D.MyBtn>
                <D.MyBtn onClick={props.onclickMoveToEdit}>수정하기</D.MyBtn>
                <D.MyBtn onClick={props.onClickDelete}>삭제하기</D.MyBtn>
            </D.PageBottom>
    </div>
    )
} 