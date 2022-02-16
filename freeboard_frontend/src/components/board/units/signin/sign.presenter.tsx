import * as P from "./sign.styles";

export default function SigninUIPage(props) {
  return (
    <P.Wrapper>
      <P.HeaderWrapper>
        <P.Title>Sign in</P.Title>
        <P.SubTitle>Please fill in your information below</P.SubTitle>
      </P.HeaderWrapper>

      <P.Body>
        <P.InnerWrapper>
          <P.Box>Email</P.Box>
          <P.Input
            type="text"
            placeholder="Enter your email"
            id="id"
            onChange={props.onChangeEmail}
          ></P.Input>
          <P.Error>{props.emailError}</P.Error>
        </P.InnerWrapper>

        <P.InnerWrapper>
          <P.Box>Password</P.Box>
          <P.Input
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={props.onChangePw}
          ></P.Input>
          <P.Error>{props.pwError}</P.Error>
        </P.InnerWrapper>
      </P.Body>

      <P.Button onClick={props.onClickUpload}>Sign in</P.Button>
      <P.SignupWrapper>
        <P.GoSignupText>Don't have an account? ➤</P.GoSignupText>
        <P.GoSignup onClick={props.onClickSignup}>Go to Sign up</P.GoSignup>
      </P.SignupWrapper>
    </P.Wrapper>
  );
}
