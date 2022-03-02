import * as S from "./styled";

export default function SettingsPage() {
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
      <S.Button>Change Password</S.Button>
    </S.Wrapper>
  );
}
