import * as D from './BoardDetail.styles'


export default function BoardDetailUIPage(props){
    return (
    <div>
        <D.MyWrapper>
            <D.MyHeader>
                    <D.HeaderLine>
                    <D.MyWriter>{props.data?.fetchBoard?.writer}</D.MyWriter>
                    <D.MyDate>{props.data?.fetchBoard?.createdAt.slice(0,10)}</D.MyDate>
                </D.HeaderLine>

            </D.MyHeader>                
            <D.DivisionL/>
            <D.MyBody>
                <D.MyTitle>{props.data?.fetchBoard?.title}</D.MyTitle>
                <D.MainPic src='/images/boardpic/mainpic.png'/>
                <D.MyContents>{props.data?.fetchBoard?.contents}</D.MyContents>
                {props.data?.fetchBoard.youtubeUrl && (
                    <D.MyYoutube
                        url={props.data?.fetchBoard.youtubeUrl}
                        width= "486px"
                        height= "240px"
                    />
                )}
                
                
            </D.MyBody>
            
        </D.MyWrapper>

            <D.PageBottom>
                <D.MyBtn onClick={props.onClickMovetoList}>목록으로</D.MyBtn>
                <D.MyBtn onClick={props.onClickMoveToEdit}>수정하기</D.MyBtn>
                <D.MyBtn onClick={props.onClickDelete}>삭제하기</D.MyBtn>
            </D.PageBottom>
    </div>
    )
} 