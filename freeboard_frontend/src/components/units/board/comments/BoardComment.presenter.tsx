import * as C from './BoardComment.styles'
import { Modal } from "antd";

export default function BoardCommentUIPage(props){
    return(
        <C.Wrapper>
            
            <C.MyTitle>댓글</C.MyTitle>

                <C.InputWrapper>
                    <C.PInput type="text" placeholder="작성자" 
                    onChange={props.onChangeMyWriter}
                    />
                    <C.PInput type="password" placeholder="비밀번호" onChange={props.onChangeMyPassword} value={props.myPassword}/>
                    <C.Star onChange={props.onChangeStar}
                    value={props.star}
                    />
                </C.InputWrapper>
            <C.CreateC>
                <C.MyWriting type="text"
                    placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
                    onChange={props.onChangeMyContents}
                    value={props.myContents}
                ></C.MyWriting>
            <C.SubmitBtn onClick={props.onClickSubmit}>등록</C.SubmitBtn>
            </C.CreateC>


            
                
            {props.isOpen && (
                    <Modal visible={true} onOk={props.onClickDelete}>
                        <div>비밀번호 입력</div>
                        <C.PInput type="password" onChange={props.onChangeDeletePassword}/>
                    </Modal>
            )}


            {props.data?.fetchBoardComments.map((el) => (
            <C.Comments key={el._id}>
                <C.WrittenStar value={el?.rating} disabled/>
                <C.Writer>{el?.writer}</C.Writer>
                <C.WriterComment>{el?.contents}</C.WriterComment>
                <C.DivisionLine></C.DivisionLine>
            
                <C.Update>
                    <C.CommentEdit onClick={props.onclickEditCom}>수정</C.CommentEdit>
                    <C.Delete id={el._id} onClick={props.onClickOpenDeleteModal}>삭제</C.Delete>
                </C.Update>
            </C.Comments>
            ))}
        </C.Wrapper>
    )
}