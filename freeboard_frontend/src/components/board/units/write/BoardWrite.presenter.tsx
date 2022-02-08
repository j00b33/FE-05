import * as F from "./BoardWrite.Styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardUIPresenter(props) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <F.Wrapper>
        <F.Title>{props.isEdit ? "Edit Post" : "Create Post"}</F.Title>
        <F.AccountSection>
          <F.InputWrapper>
            <F.Label>Writer</F.Label>
            <F.Writer
              type="text"
              placeholder="Enter Your Name"
              onChange={props.onChangeMyWriter}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={!!props.data?.fetchBoard.writer} //!!철수 --> false --> true
            ></F.Writer>
            <br />
            <F.Your__Error>{props.myWriterError}</F.Your__Error>
          </F.InputWrapper>
          <F.InputWrapper>
            <F.Label>Password</F.Label>
            <F.Password
              type="password"
              placeholder="Enter Your Password"
              onChange={props.onChangeMyPw}
            ></F.Password>
            <br />
            <F.Your__Error>{props.myPasswordError}</F.Your__Error>
          </F.InputWrapper>
        </F.AccountSection>

        <F.InputWrapper>
          <F.Label>Title</F.Label>
          <F.Longbox
            type="text"
            placeholder="Enter Your Title"
            onChange={props.onChangeMyTitle}
            defaultValue={props.data?.fetchBoard.title}
          ></F.Longbox>
          <br />
          <F.Your__Error>{props.myTitleError}</F.Your__Error>
        </F.InputWrapper>

        <F.InputWrapper>
          <F.Label>Contents</F.Label>
          <F.Contents
            type="text"
            placeholder="Enter Your Contents"
            onChange={props.onChangeMyContents}
            defaultValue={props.data?.fetchBoard.contents}
          ></F.Contents>
          <br />
          <F.Your__Error>{props.myContentsError}</F.Your__Error>
        </F.InputWrapper>

        <F.ZipWrapper>
          <F.Label>Address</F.Label>
          <F.ZipcodeWrapper>
            <F.Zipcode
              placeholder="00000"
              readOnly={true}
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
              //value 보여주고 받아온게 없으면 이걸 보여줘
            />
            <F.AddressBtn onClick={props.onClickAddressSearch}>
              Search
            </F.AddressBtn>
            {props.isModalVisible && (
              <Modal
                title="Address"
                visible={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
              ></Modal>
            )}
          </F.ZipcodeWrapper>
          <F.AddressDetail
            readOnly={true}
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
            //우리가 클릭해서 선택한 주소가 있으면 보여주고 없으면 fetchBoard로 받아온 address를 받아줘
            //이때 우리가 아직 선택한게 없다면 value가 없을테니까 공백이 보여지게 되는거임
          />
          <F.AddressDetail
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
        </F.ZipWrapper>

        <F.InputWrapper>
          <F.Label>Youtube URL</F.Label>
          <F.Youtube
            placeholder="Copy Your Link Here"
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
          />
        </F.InputWrapper>

        <F.ImageWrapper>
          <F.Label>Add Photo</F.Label>
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
          <F.Label>Select</F.Label>
          <F.RadioWrapper>
            <F.RadioButton type="radio" name="seletion" id="Youtube" />
            Youtube
            <F.RadioButton type="radio" name="seletion" id="Image" />
            Image
          </F.RadioWrapper>
        </F.OptionWrapper>

        <F.ButtonWrapper>
          <F.MyBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "Edit" : "Create"}
          </F.MyBtn>
        </F.ButtonWrapper>
      </F.Wrapper>
    </>
  );
}
