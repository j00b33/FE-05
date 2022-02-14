import { gql, useMutation } from "@apollo/client";
import { Modal } from "@material-ui/core";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

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

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      if (setAccessToken)
        setAccessToken(result.data?.loginUser.accessToken || "");
      console.log(result.data?.loginUser.accessToken);
    } catch (error) {
      if (error instanceof Error) {
        alert("Failed");
      }
    }
  };

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
//eee => email $
