import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import * as S from "./styled";

const RESET_USED_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      name
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

export default function SettingsPage() {
  const [newName, setNewName] = useState("");
  const [prevPw, setPrevPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const [resetUserPassword] = useMutation(RESET_USED_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER);

  const { data: userData, refetch } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeNewName = (event) => {
    setNewName(event.target.value);
  };
  const onChangePrevPw = (event) => {
    setPrevPw(event.target.value);
  };

  const onChangeNewPw = (event) => {
    setNewPw(event.target.value);
  };

  const onChangePwCheck = (event) => {
    setPwCheck(event.target.value);
  };

  console.log("================");
  console.log("prevPw:", prevPw);
  console.log("newPw:", newPw);
  console.log("pwCheck:", pwCheck);
  console.log("newName:", newName);

  const onClickUpdate = async () => {
    await resetUserPassword({
      variables: {
        password: newPw,
      },
    });

    if (newPw === pwCheck) {
      Modal.success({ content: "Profile Successfully Updated" });
    } else {
      Modal.error({ content: "The password doesn't match" });
    }
  };

  const onClickUserName = async () => {
    await updateUser({
      variables: {
        updateUserInput: {
          name: String(newName),
        },
      },
    });

    Modal.success({ content: "Successfully Updated" });
    refetch();
  };
  return (
    <S.Wrapper>
      <S.BodyWrapper>
        <S.NameSection>
          <S.SubHeader>Edit Username</S.SubHeader>
          <S.InnerWrapper>
            <S.Text>New Username</S.Text>
            <S.Input
              onChange={onChangeNewName}
              type="text"
              placeholder="Enter your new username"
            ></S.Input>
          </S.InnerWrapper>
          <S.Button onClick={onClickUserName}>Update username</S.Button>
        </S.NameSection>

        <S.DivisionLine />

        <S.SectionWrapper>
          <S.SubHeader>Edit Password</S.SubHeader>
          <S.InnerWrapper>
            <S.Text>Current Password</S.Text>
            <S.Input
              onChange={onChangePrevPw}
              type="password"
              placeholder="Enter your current password"
            ></S.Input>
          </S.InnerWrapper>

          <S.InnerWrapper>
            <S.Text>New Password</S.Text>
            <S.Input
              onChange={onChangeNewPw}
              type="password"
              placeholder="Enter your new password"
            ></S.Input>
          </S.InnerWrapper>

          <S.InnerWrapper>
            <S.Text>Password Check</S.Text>
            <S.Input
              onChange={onChangePwCheck}
              type="password"
              placeholder="Enter your new password once more"
            ></S.Input>
          </S.InnerWrapper>
          <S.Button onClick={onClickUpdate}>Update Profile</S.Button>
        </S.SectionWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
