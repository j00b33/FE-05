import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { GlobalContext } from "../../_app";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();

  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">, //Omit=> 특정 데이터 빼고 나머지 다 가져와줘  // Partial => IMutation 가지고 오는데 뒤에 물음표 붙여서 가져오기 (있을수도 있고 없을수도 있기 때문임)
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

  const onClickLogin = async () => {
    try {
      //로그인하기
      const result = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      });

      //global state에 저장하기
      const accessToken = result.data?.loginUserExample.accessToken || "";
      if (setAccessToken) setAccessToken(accessToken);

      //success page로 이동
      router.push("/06Week/30-02-success");
    } catch (error) {
      if (error instanceof Error) {
        alert("회원가입을 먼저 해주세요");
      }
    }
  };

  return (
    <div>
      <input type="text" onChange={onChangeEmail} placeholder="Email" />
      <input
        type="password"
        onChange={onChangePassword}
        placeholder="Password"
      />
      <div onClick={onClickLogin}>로그인하기</div>
    </div>
  );
}
