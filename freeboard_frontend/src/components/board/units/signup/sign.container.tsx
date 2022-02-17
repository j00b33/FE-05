// import Modal from "antd/lib/modal/Modal";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import SignupUIPage from "./sign.presenter";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function SignupContainer() {
  const [createUser] = useMutation<
    Pick<IMutation, "loginUser">, //Omit=> 특정 데이터 빼고 나머지 다 가져와줘  // Partial => IMutation 가지고 오는데 뒤에 물음표 붙여서 가져오기 (있을수도 있고 없을수도 있기 때문임)
    IMutationCreateUserArgs
  >(CREATE_USER);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangePw = (event) => {
    setPassword(event.target.value);
  };

  const onClickUpload = async () => {
    if (name.length < 2) {
      setNameError("* User-name must be at least 2 letters *");
    } else {
      setNameError("");
    }

    if (/^\w+@\w+\.\w+$/.test(email) === false) {
      setEmailError("* Email must be in a valid form *");
    } else {
      setEmailError("");
    }

    if (password.length < 4) {
      setPasswordError("* Password should be at least 4 letters *");
    } else {
      setPasswordError("");
    }

    if (/^\d{2}$/.test(age) === false) {
      setAgeError("* Enter your age *");
    } else {
      setAgeError("");
    }

    if (
      /^\w+@\w+\.\w+$/.test(email) === true &&
      /^\d{2}$/.test(age) === true &&
      name.length >= 2 &&
      password.length >= 4
    ) {
      Modal.success({ content: "Welcome:) Moving to sign in page..." });

      const signup = collection(getFirestore(firebaseApp), "signup");
      //접속정보, 컬렉션 이름
      await addDoc(signup, {
        // ...userInput,
        email,
        name,
        password,
        age,
      });

      await createUser({
        variables: {
          createUserInput: {
            password,
            email,
            name,
          },
        },
      });
      router.push("/01-01-board/signin");
    } else {
      return Modal.warn({ content: "Check the requirements" });
    }
  };

  const onClickSignin = () => {
    router.push("/01-01-board/signin");
  };

  const onClickApi = () => {
    router.push("/01-01-board/api");
  };

  return (
    <SignupUIPage
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeAge={onChangeAge}
      onChangePw={onChangePw}
      onClickUpload={onClickUpload}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      ageError={ageError}
      onClickSignin={onClickSignin}
      onClickApi={onClickApi}
    />
  );
}
