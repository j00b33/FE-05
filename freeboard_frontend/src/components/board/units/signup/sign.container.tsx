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

export default function SignupContainer() {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");

  const [userInput, setUserInput] = useState({
    id: "",
    name: "",
    password: "",
    age: "",
  });

  const onChangeUserInput = (event) => {
    setUserInput({
      ...userInput,
      [event.target.id]: event.target.value,
    });
  };

  const onClickUpload = async () => {
    //firebase에 한줄 등록하기
    const signup = collection(getFirestore(firebaseApp), "signup");
    //접속정보, 컬렉션 이름
    await addDoc(signup, {
      ...userInput,
    });

    if (userInput.id.length < 4) {
      setIdError("* ID should be longer than 3 letters *");
      setIsActive(false);
    } else {
      setIdError("");
    }

    if (userInput.name.length < 3) {
      setNameError("* Username should be longer than 3 letters *");
      setIsActive(false);
    } else {
      setNameError("");
    }

    if (userInput.password.length < 4) {
      setPasswordError("* Password should be at least 4 letters *");
      setIsActive(false);
    } else {
      setPasswordError("");
    }

    if (userInput.age.length > 2) {
      setAgeError("* Enter your age *");
      setIsActive(false);
    } else {
      setAgeError("");
    }

    if (
      userInput.id.length >= 4 &&
      userInput.name.length >= 3 &&
      userInput.password.length >= 4 &&
      userInput.age.length <= 2
    ) {
      Modal.success({ content: "Welcome" });
      setIsActive(true);
    }

    router.push("/01-01-board/list");
  };

  return (
    <SignupUIPage
      onChangeUserInput={onChangeUserInput}
      onClickUpload={onClickUpload}
      isActive={isActive}
      idError={idError}
      nameError={nameError}
      passwordError={passwordError}
      ageError={ageError}
    />
  );
}
