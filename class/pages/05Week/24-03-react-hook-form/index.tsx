import { useForm } from "react-hook-form";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

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
      Title: <input type="text" {...register("myTitle")} />
      Content: <input type="text" {...register("myContents")} />
      <button>Submit</button>
      {/* <button type="button">My Button</button>
            reset: form안에 있는 Input값들을 초기화시킴
            submit: submit에 연결된 함수 실행 */}
    </form>
  );
}
