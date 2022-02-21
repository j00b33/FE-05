import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { GlobalContext } from "../../_app";
import * as S from "./styles";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">, //Omit=> 특정 데이터 빼고 나머지 다 가져와줘  // Partial => IMutation 가지고 오는데 뒤에 물음표 붙여서 가져오기 (있을수도 있고 없을수도 있기 때문임)
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const router = useRouter();

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken || "";
      console.log(accessToken);

      if (setAccessToken) {
        //새로고침하면 사라짐
        setAccessToken(result.data?.loginUser.accessToken || "");

        console.log("========");
        console.log(localStorage.getItem("accessToken"));
        console.log("========");

        //새로고침하면 사라지는걸 방지하기 위해
        // localStorage.setItem("aaa","철수")
        // localStorage.getItem("aaa")
        localStorage.setItem(
          "accessToken",
          result.data?.loginUser.accessToken || ""
        );

        //success page로 이동
        router.push("23-05-login-check-success");
      }
      console.log(result.data?.loginUser.accessToken);
    } catch (error) {
      if (error instanceof Error) {
        alert("회원가입을 먼저 해주세요");
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Email type="text" onChange={onChangeEmail} placeholder="Email" />
      <S.Password
        type="password"
        onChange={onChangePassword}
        placeholder="Password"
      />
      <S.Button onClick={onClickLogin}>로그인하기</S.Button>
    </S.Wrapper>
  );
}
