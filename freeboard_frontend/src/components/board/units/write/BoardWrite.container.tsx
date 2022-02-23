import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import BoardUIPresenter from "./BoardWrite.presenter";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { checkFileValidation } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import withAuth from "../../../commons/hoc/withAuth";

const BoardContain = (props) => {
  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [myWriterError, setMyWriterError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myTitleError, setMyTitleError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
    if (myWriter !== "") {
      setMyWriterError("");
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPw(event) {
    setMyPassword(event.target.value);
    if (myPassword.length > 3) {
      setMyPasswordError("");
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
    if (myTitle !== "") {
      setMyTitleError("");
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
    if (myContents !== "") {
      setMyContentsError("");
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }

  //우편번호 받아오기
  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  const onCompleteAddressSearch = (data: any) => {
    //이걸 클릭했을떄 내가 어떤 주소를 클릭했는지 데이터가 들어옴
    setAddress(data.address);
    setZipcode(String(data.zonecode));
    setIsOpen(false);

    console.log(data);
    console.log(zipcode);
    console.log(address);
    //modal complete되면 다시 닫아줘야함
    //state바뀌면 전체 component가 다 새롭게 다시 만들어지는데 이때 false로 그려지게 됨
    //그래서 우리가 느끼기엔 모달이 나왔다가 사라진거처럼 사실은 false인 상태로 다시 그려진 것
    //사라진게 아니라 아예 다시 새롭게 됐을때 그려지지 않은것
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickSubmit = async () => {
    if (myWriter === "") {
      setMyWriterError("* 성을 포함하여 정확한 이름을 입력해주세요");
    }
    if (myPassword.length < 4) {
      setMyPasswordError("* 비밀번호를 4자 이상 입력해주세요");
    }
    if (myTitle === "") {
      setMyTitleError("* 제목을 한 글자 이상 입력해주세요");
    }
    if (myContents === "") {
      setMyContentsError("* 내용을 입력해주세요");
    }
    if (
      myWriter !== "" &&
      myPassword.length > 3 &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      Modal.success({ content: "게시물이 등록되었습니다" });
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: myWriter,
              password: myPassword,
              title: myTitle,
              contents: myContents,
              youtubeUrl: youtubeUrl,
              images: image,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
            },
          },
        });
        router.push(`/01-01-board/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const onClickUpdate = async () => {
    if (!myTitle && !myContents && !youtubeUrl) {
      Modal.error({ content: "하나는 수정해야합니다" });
    }
    if (!myPassword) {
      Modal.error({ content: "비밀번호를 입력해주세요" });
    }

    interface IMyUpdateBoardInput {
      title?: string;
      contents?: string;
      youtubeUrl?: string;
      boardAddress?: {
        zipcode?: String;
        address?: String;
        addressDetail?: String;
      };
    }

    const myUpdateBoardInput: IMyUpdateBoardInput = {};
    if (myTitle) myUpdateBoardInput.title = myTitle;
    if (myContents) myUpdateBoardInput.contents = myContents;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      //셋중에 하나라도 변경사항이 생기면 아래 괄호 안의 코드가 실행이 됨
      myUpdateBoardInput.boardAddress = {};
      if (zipcode) myUpdateBoardInput.boardAddress.zipcode = zipcode;
      if (address) myUpdateBoardInput.boardAddress.address = address;
      if (addressDetail)
        myUpdateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardDetail,
          password: myPassword,
          updateBoardInput: myUpdateBoardInput,
        },
      });
      Modal.success({ content: "수정이 완료되었습니다" });
      router.push(`/01-01-board/${router.query.boardDetail}`);
    } catch (error) {
      Modal.error({ content: "수정에 오류가 생겼습니다" });
    }
  };

  //이미지 추가
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) {
      return;
    }

    try {
      const result = await uploadFile({ variables: { file } });
      // console.log(result.data?.uploadFile.url);
      setImage(result.data?.uploadFile.url || "");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <BoardUIPresenter
      myWriterError={myWriterError}
      myPasswordError={myPasswordError}
      myTitleError={myTitleError}
      myContentsError={myContentsError}
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPw={onChangeMyPw}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      isOpen={isOpen}
      data={props.data}
      isActive={isActive}
      isEdit={props.isEdit}
      zipcode={zipcode}
      address={address}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onToggleModal={onToggleModal}
      //image props
      onClickImage={onClickImage}
      image={image}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
    />
  );
};

export default withAuth(BoardContain);
