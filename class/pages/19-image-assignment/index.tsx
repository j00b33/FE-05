//goal : onClick 하면 fileRef.click()이 되도록 연결시키는것
import { ChangeEvent, useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkFileValidation } from "../../src/commons/libraries/utils";
import { Space } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String
    $password: String
    $title: String
    $Contents: String!
  ) {
    createBoard(
      writer: $writer
      password: $password
      title: $title
      contents: $contents
    ) {
      writer
      title
      contents
    }
  }
`;

export default function ImageValidationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [image, setImage] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) {
      return;
    }

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImage(result.data?.uploadFile.url || "");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onClickSave = (event: any) => {
    setWriter(event.target.writer);
    setTitle(event.target.title);
    setContents(event.target.contents);
    alert("등록이 완료되었습니다");
  };

  return (
    <div>
      <input type="text" placeholder="작성자"></input>
      <input type="password" placeholder="비밀번호"></input>
      <input type="text" placeholder="제목"></input>
      <input type="text" placeholder="내용"></input>

      <Space onClick={onClickImage}>
        <LikeOutlined
          style={{
            width: "100px",
            height: "100px;",
            color: "#5080b6",
            cursor: "pointer",
          }}
        />
      </Space>

      <img src={`https://storage.googleapis.com/${image}`} />

      <button onClick={onClickSave}>저장하기</button>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        //화면에만 안보이는거
      />
    </div>
  );
}

//image 받아온걸 보드에 같이 image를 넘겨줘야함
