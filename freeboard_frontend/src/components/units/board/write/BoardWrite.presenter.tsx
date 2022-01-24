import * as F from './BoardWrite.Styles'

export default function BoardUIPresenter(props){
    return(
        <F.Wrapper>
            <F.Title>게시물 등록</F.Title>
                    <F.AccountSection>
                        <F.InputWrapper>
                            <F.Label>작성자</F.Label>
                            <F.Writer type="text" placeholder="이름을 적어주세요" onChange={props.onChangeMyWriter}
                            defaultValue = {props.isEdit ? props.onChangeMyWriter : ""}
                            ></F.Writer><br/>
                            <F.Your__Error>{props.myWriterError}</F.Your__Error> 
                        </F.InputWrapper>
                        <F.InputWrapper>
                            <F.Label>비밀번호</F.Label>
                            <F.Password type="password" placeholder="비밀번호를 입력해주세요" onChange={props.onChangeMyPw}
                            ></F.Password><br/>
                            <F.Your__Error>{props.myPasswordError}</F.Your__Error> 
                        </F.InputWrapper>
                    </F.AccountSection>
                    

                    <F.InputWrapper>
                        <F.Label>제목</F.Label>
                        <F.Longbox type="text" placeholder="제목을 작성해주세요" onChange={props.onChangeMyTitle}
                        defaultValue = {props.isEdit ? props.onChangeMyTitle : ""}
                        ></F.Longbox><br/>
                        <F.Your__Error>{props.myTitleError}</F.Your__Error> 
                    </F.InputWrapper>

                    <F.InputWrapper>
                        <F.Label>내용</F.Label>
                        <F.Contents type="text" placeholder="내용을 작성해주세요" onChange={props.onChangeMyContents}
                        defaultValue = {props.isEdit ? props.onChangeMyContents : ""}
                        ></F.Contents><br/>
                        <F.Your__Error>{props.myContentsError}</F.Your__Error>
                    </F.InputWrapper>

                    <F.ZipWrapper>
                        <F.Label>주소</F.Label>
                        <F.ZipcodeWrapper>
                            <F.Zipcode placeholder="00000"></F.Zipcode>
                            <F.AddressBtn>우편번호 검색</F.AddressBtn>
                        </F.ZipcodeWrapper>
                        <F.Longbox/>
                        <F.Longbox/>
                    </F.ZipWrapper>

                    <F.InputWrapper>
                        <F.Label>유튜브</F.Label>
                        <F.Longbox placeholder="링크를 복사해주세요"/>
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
                // onClick={props.onClickSubmit} cc={props.isActive}
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
                // isActive={props.isEdit? true : props.isActive}
                >등록하기</F.MyBtn>
            </F.ButtonWrapper> 

        </F.Wrapper>

) 
}
