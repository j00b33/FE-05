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

    // if (userInput.id.length >= 4) {
    //   setIdError("");
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }

    // if (userInput.name.length >= 2) {
    //   setNameError("");
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }

    // if (userInput.password.length >= 4) {
    //   setPasswordError("");
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }

    // if (userInput.age.length <= 2) {
    //   setAgeError("");
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }
  };

  const onClickUpload = async () => {
    // if (userInput.id.length < 5) {
    //   setIdError("* ID should be at least 4 letters *");
    // }

    // if (userInput.name.length < 2) {
    //   setNameError("* Username should be at least 2 letters *");
    // }

    // if (userInput.password.length < 4) {
    //   setPasswordError("* Password should be at least 4 letters *");
    // }

    // if (userInput.age.length > 2) {
    //   setAgeError("* Enter your age *");
    // }

    // if (
    //   userInput.id.length >= 4 &&
    //   userInput.name.length >= 2 &&
    //   userInput.password.length >= 4 &&
    //   userInput.age.length <= 2
    // ) {
    //   setIsActive(true);
    //   Modal.success({ content: "Welcome" });
    // } else {
    //   setIsActive(false);
    // }
    ///===========================

    //   if (
    //     userInput.id !== "" &&
    //     userInput.name !== "" &&
    //     userInput.password !== "" &&
    //     userInput.age !== ""
    //   ) {
    //     Modal.success({ content: "Welcome" });
    //     const signup = collection(getFirestore(firebaseApp), "signup");
    //     //접속정보, 컬렉션 이름
    //     await addDoc(signup, {
    //       ...userInput,
    //     });

    //     router.push("/01-01-board/list");
    //   } else return Modal.warn({ content: "Fill in the blanks" });
    // };

    if (
      userInput.id.length >= 4 &&
      userInput.name.length >= 2 &&
      userInput.password.length >= 4 &&
      userInput.age.length <= 2
    ) {
      Modal.success({ content: "Welcome" });
      const signup = collection(getFirestore(firebaseApp), "signup");
      //접속정보, 컬렉션 이름
      await addDoc(signup, {
        ...userInput,
      });

      router.push("/01-01-board/list");
    } else {
      return Modal.warn({ content: "Check the requirements" });
    }
  };

  //firebase에 한줄 등록하기

  return (
    <SignupUIPage
      onChangeUserInput={onChangeUserInput}
      onClickUpload={onClickUpload}
    />
  );
}
