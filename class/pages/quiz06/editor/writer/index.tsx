import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill"; // --> dynamic import로 변경하기
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../src/commons/types/generated/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
//ssr: "server-side-rendering 에서는 하지마 브라우저에서만 해"

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function WebEditorPage() {
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
    trigger("contents");
  };

  const onClickSubmit = async (data: IFromValues) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      Modal.warn({ content: "필수 입력 사항입니다!" });
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/quiz06/editor/detail/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
      <br />
      <button>등록하기</button>
    </form>
  );
}
