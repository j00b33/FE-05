import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

export default function ImageUploadSubmitPage() {
  const [file1, setFile1] = useState<File>(); //File타입이라고 알려줘야함 안그러면 빈문자열이라고 추론해버림
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //데이터를 읽어서 URL로 변경하는 작업 (괄호 안에는 어떤결 변강힐지)
    //()하면 blob이 뜨는데 이건 사이즈가 큰 데이터를 의미함 (이미지 / 영상 등등)
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result); //콘솔에 찍히는 이 주소는 그 엄청 긴 가짜 주소
        setImageUrl(data.target?.result); //string이 아닐 수도 있ek 없으면 어쩔거냐
        // --> 그래서 없으면 string으로 해줘 하는거
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async () => {
    // 1. image 업로드 해서 url 받아오기=> uploadFile()
    const result = await uploadFile({
      variables: { file: file1 },
    });
    const imageUrl = result.data?.uploadFile.url || "";

    // 2. createBoard로 게시글 등록하기
    // -- writer, title, contents 는 하드코딩 (우선 지금은 이미지 집중!)
    // -- imageUrl 전송하려고 하는중
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "이름",
          password: "asdf",
          title: "제목입니다",
          contents: "이미지 업로드입니다",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <div>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
