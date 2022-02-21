import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";

const Button = styled.div`
  cursor: pointer;
  background-color: #72b3af;
  border: 2px solid grey;
  width: 300px;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  :hover {
    background-color: #96bdba;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 200px;
`;

const Input = styled.input`
  border-radius: 15px;
  width: 300px;
`;

const Out = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
interface FormValues {
  id?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data: FormValues) => {
    try {
      const accessToken = localStorage?.accessToken || "";
      console.log(accessToken);

      console.log("========");
      console.log(localStorage.getItem("accessToken"));
      console.log("========");

      //새로고침하면 사라지는걸 방지하기 위해
      // localStorage.setItem("aaa","철수")
      // localStorage.getItem("aaa")
      localStorage.setItem("accessToken", accessToken || "");
      alert(
        "로그인에 성공하셨습니다. 비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?"
      );
      router.push("/quiz06/basket");
    } catch (error) {
      if (error instanceof Error) {
        alert("로그인에 실패했습니다");
      }
    }
  };

  return (
    <Out>
      <Header>로그인 페이지</Header>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <Wrapper>
          <Input
            type="text"
            {...register("id")}
            placeholder="아이디를 입력하세요"
          />
          <Input
            type="password"
            {...register("password")}
            placeholder="비밀번호를 입력하세요"
          />
          <Button>로그인 하기</Button>
        </Wrapper>
      </form>
    </Out>
  );
}
