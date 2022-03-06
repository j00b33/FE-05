import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import * as S from "./styled";

// const RESET_USED_PASSWORD = gql`
//   mutation: resetUserPassword($password: String!){
//     resetUserPassword(password: $password)
//   }
// `;

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
    }
  }
`;

export default function SettingsPage() {
  // const [resetUserPassword] = useMutation(RESET_USED_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER);

  const onClickUpdate = () => {
    Modal.success({ content: "Successfully Updated" });
  };
  return (
    <S.Wrapper>
      <S.Header>Profile Settings</S.Header>

      <S.BodyWrapper>
        <S.InnerWrapper>
          <S.Text>Current Password</S.Text>
          <S.Input placeholder="Enter your current password"></S.Input>
        </S.InnerWrapper>

        <S.InnerWrapper>
          <S.Text>New Password</S.Text>
          <S.Input placeholder="Enter your new password"></S.Input>
        </S.InnerWrapper>

        <S.InnerWrapper>
          <S.Text>Password Check</S.Text>
          <S.Input placeholder="Enter your new password once more"></S.Input>
        </S.InnerWrapper>
      </S.BodyWrapper>
      <S.Button onClick={onClickUpdate}>Update Profile</S.Button>
    </S.Wrapper>
  );
}
