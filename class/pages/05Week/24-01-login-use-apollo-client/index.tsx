import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { GlobalContext } from "../../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const client = useApolloClient();

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
      //로그인하기
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      //유저 정보 받아오기
      const accessToken = result.data?.loginUser.accessToken || "";
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: { Authorization: `Bearer ${accessToken}` }, //있어도 되고 없어도 되고 별 상관 없음 app에서 이미 declare해놨기 때문에
        },
      });

      const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      //global state에 저장하기
      if (setAccessToken) setAccessToken(accessToken);
      if (setUserInfo) setUserInfo(resultUserInfo.data.fetchUserLoggedIn);

      //새로고침하면 사라지는걸 방지하기 위해 localStorage에 임시 저장
      // (refreshToken 배우기 전까지 임시저장)
      // localStorage.setItem("aaa","철수")
      // localStorage.getItem("aaa")
      localStorage.setItem("accessToken", accessToken || "");
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      //잘 들어가있는지 확인하기
      console.log("========");
      console.log(localStorage.getItem("accessToken"));
      console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"));
      console.log("========");

      //success page로 이동
      router.push("23-05-login-check-success");
      console.log(result.data?.loginUser.accessToken);
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
