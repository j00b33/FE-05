import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill"; // --> dynamic import로 변경하기
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
//ssr: "server-side-rendering 에서는 하지마 브라우저에서만 해"

const CREATE_BOARD = gql`
mutaion createBoard($createBoardInput: CreateBoardInput!){
  createBoard(createBoardInput: $createBoardInput){
    _id
    writer
    password
    title
    contents
  }
}
`;

interface IFormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function WebEditorWithHookFormPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //contents 라는 state에다가 value값을 넣어주는거
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능 (register이 편하겠지만 event가 들어오지 않고 가짜로 만들어진 속성이기 때문)
    //값은 변하긴 했는데 change가 됐는지 안됐는지를 인식하진 못함

    //값도 변경해주면서 changeEvent가 진행이 됐다는걸 알려주는것 : trigger
    trigger("contents");
    //onChange가 됐는지 안됐는지 react-hook-form에 알려주는 기능
  };

  const onClickSubmit = async (data: IFormValues) => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push("완료된 페이지로 이동");
    } catch (error) {
      Modal.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      {/* 여기에 변동이 생기면 handleChange에 value가 들어오게 되는것 (event같은 느낌인데 얘는 바로 들어오는거) 
        여기선 {...register("contents")} 안써줌
      */}
      <br />
      <button>등록하기</button>
    </form>
  );
}
