import * as F from './BoardWrite.Styles'
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function BoardUIPresenter(props){
    return(
        <F.Wrapper>
            <F.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</F.Title>
                    <F.AccountSection>
                        <F.InputWrapper>
                            <F.Label>작성자</F.Label>
                            <F.Writer type="text" 
                            placeholder="이름을 적어주세요" 
                            onChange={props.onChangeMyWriter}
                            defaultValue={props.data?.fetchBoard.writer}
                            readOnly={!!props.data?.fetchBoard.writer}   //!!철수 --> false --> true
                            ></F.Writer><br/>
                            <F.Your__Error>{props.myWriterError}</F.Your__Error> 
                        </F.InputWrapper>
                        <F.InputWrapper>
                            <F.Label>비밀번호</F.Label>
                            <F.Password type="password" placeholder="비밀번호를 입력해주세요" 
                            onChange={props.onChangeMyPw}
                            ></F.Password><br/>
                            <F.Your__Error>{props.myPasswordError}</F.Your__Error> 
                        </F.InputWrapper>
                    </F.AccountSection>
                    

                    <F.InputWrapper>
                        <F.Label>제목</F.Label>
                        <F.Longbox type="text" placeholder="제목을 작성해주세요" 
                        onChange={props.onChangeMyTitle}
                        defaultValue={props.data?.fetchBoard.title}
                        ></F.Longbox><br/>
                        <F.Your__Error>{props.myTitleError}</F.Your__Error> 
                    </F.InputWrapper>

                    <F.InputWrapper>
                        <F.Label>내용</F.Label>
                        <F.Contents type="text" placeholder="내용을 작성해주세요" 
                        onChange={props.onChangeMyContents}
                        defaultValue={props.data?.fetchBoard.contents}
                        ></F.Contents><br/>
                        <F.Your__Error>{props.myContentsError}</F.Your__Error>
                    </F.InputWrapper>

                    <F.ZipWrapper>
                        <F.Label>주소</F.Label>
                        <F.ZipcodeWrapper>
                            <F.Zipcode placeholder="00000"
                            readOnly
                            value={props.zipcode ||
                            props.data?.fetchBoard.boardAddress?.zipcode || ""}
                            />
                            <F.AddressBtn onClick={props.onClickAddress}>
                            우편번호 검색</F.AddressBtn>
                            {props.isModalVisible && (<Modal title="Address" visible={true} onOk={props.handleOk} onCancel={props.handleCancel}>
                            <DaumPostcode onComplete={props.onCompleteDaumPostCode}/>
                            </Modal>)}
                        </F.ZipcodeWrapper>
                        <F.Longbox/>
                        <F.Longbox/>
                    </F.ZipWrapper>

                    <F.InputWrapper>
                        <F.Label>유튜브</F.Label>
                        <F.Youtube placeholder="링크를 복사해주세요"
                        onChange={props.onChangeYoutubeUrl}
                        defaultValue={props.data?.fetchBoard.youtubeUrl}
                        />
                    </F.InputWrapper>

                    <F.ImageWrapper>
                        <F.Label>사진 첨부</F.Label>
                        <F.GreyBoxes>
                            <F.Box>
                                <F.BoxWord>+</F.BoxWord>
                                <F.BoxWord>Upload</F.BoxWord>
                            </F.Box>
                            <F.Box>
                                <F.BoxWord>+</F.BoxWord>
                                <F.BoxWord>Upload</F.BoxWord>
                            </F.Box>
                            <F.Box>
                                <F.BoxWord>+</F.BoxWord>
                                <F.BoxWord>Upload</F.BoxWord>
                            </F.Box>
                        </F.GreyBoxes>
                    </F.ImageWrapper>

                    <F.OptionWrapper>
                        <F.Label>메인 설정</F.Label>
                        <F.RadioWrapper>
                        <F.RadioButton type="radio" ></F.RadioButton>유튜브
                        <F.RadioButton type="radio" ></F.RadioButton>사진
                        </F.RadioWrapper>
                    </F.OptionWrapper>

            <F.ButtonWrapper>
                <F.MyBtn 
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
                isActive={props.isEdit? true : props.isActive}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
                </F.MyBtn>
            </F.ButtonWrapper> 

        </F.Wrapper>

) 
}
