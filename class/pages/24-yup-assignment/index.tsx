import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  myWriter?: string;
  myPassword?: string;
  myTitle?: string;
  myContents?: string;
}

const schema = yup.object().shape({
  myWriter: yup
    .string()
    .max(5, "작성자는 5글자 이내로 입력해주세요.")
    .required("작성자는 필수 입력 사항입니다"),
  myPassword: yup
    .string()
    // . (0-9, '비밀번호는 영문, 숫자, 특수문자를 포함해야합니다')
    .max(8, "비밀번호는 8자 이내로 입력해주세요")
    .required("비밀번호는 필수 입력 사항입니다"),
  myTitle: yup
    .string()
    .max(100, "제목은 100자 이내로 입력해주세요")
    .required("작성자는 필수 입력 사항입니다"),
  myContents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 입력해주세요")
    .required("제목은 필수 입력 사항입니다"),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: FormValues) => {
    console.log("====Check====");
    console.log(data);
  };

  //re-render 체크하는 방법
  console.log("==re-rendering check==");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* default값이 type="submit"이기 때문에 type="button"으로 해줘야함 */}
      Writer: <input type="text" {...register("myWriter")} />
      <div>{formState.errors.myWriter?.message}</div>
      Password: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      Title: <input type="text" {...register("myTitle")} />
      <div>{formState.errors.myTitle?.message}</div>
      Content: <input type="text" {...register("myContents")} />
      <div>{formState.errors.myContents?.message}</div>
      <button>Submit</button>
      {/* <button type="button">My Button</button>
            reset: form안에 있는 Input값들을 초기화시킴
            submit: submit에 연결된 함수 실행 */}
    </form>
  );
}
