// import Modal from "antd/lib/modal/Modal";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { firebaseApp, GlobalContext } from "../../../../../pages/_app";
import SigninUIPage from "./sign.presenter";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SigninContainer() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">, //Omit=> 특정 데이터 빼고 나머지 다 가져와줘  // Partial => IMutation 가지고 오는데 뒤에 물음표 붙여서 가져오기 (있을수도 있고 없을수도 있기 때문임)
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickUpload = async () => {
    try {
      //refreshToken
      // //로그인하기
      // const result = await loginUser({
      //   variables: {
      //     email: email,
      //     password: password,
      //   },
      // });

      // //global state에 저장하기
      // const accessToken = result.data?.loginUser.accessToken || "";
      // if (setAccessToken) setAccessToken(accessToken);

      // 그냥 accessToken
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      if (setAccessToken)
        // console.log(result);
        setAccessToken(accessToken || "");

      // console.log(localStorage.getItem("accessToken"));
      localStorage.setItem("accessToken", accessToken || "");

      console.log(result.data?.loginUser.accessToken);
      Modal.success({ content: "Welcome:)" });
      router.push("/01-01-market/home");

      // =====firebase=====
      const signin = collection(getFirestore(firebaseApp), "signin");
      await addDoc(signin, {
        email,
        password,
      });
      //====================
    } catch (error) {
      if (error instanceof Error) {
        Modal.warn({
          content: "Your account doesn't exist. Please sign up first.",
        });
      }
    }
  };

  const onClickSignup = () => {
    router.push("/01-01-board/signup");
  };

  return (
    <SigninUIPage
      onChangeEmail={onChangeEmail}
      onChangePw={onChangePw}
      onClickUpload={onClickUpload}
      onClickSignup={onClickSignup}
    />
  );
}
