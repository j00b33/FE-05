import * as P from "./sign.styles";

export default function SignupUIPage(props) {
  return (
    <P.Wrapper>
      <P.HeaderWrapper>
        <P.Title>Sign up</P.Title>
        <P.SubTitle>Please fill in your information below</P.SubTitle>
      </P.HeaderWrapper>

      <P.Body>
        <P.InnerWrapper>
          <P.NameHeader>
            <P.Box>Username</P.Box>
            <P.Random onClick={props.onClickApi}>
              Click here to get a random username!
            </P.Random>
          </P.NameHeader>
          <P.Input
            type="text"
            placeholder="Enter your username"
            id="name"
            onChange={props.onChangeName}
          ></P.Input>
          <P.Error>{props.nameError}</P.Error>
        </P.InnerWrapper>

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
          <P.Error>{props.passwordError}</P.Error>
        </P.InnerWrapper>

        <P.InnerWrapper>
          <P.Box>Age</P.Box>
          <P.Input
            type="text"
            placeholder="Enter your age"
            id="age"
            onChange={props.onChangeAge}
          ></P.Input>
          <P.Error>{props.ageError}</P.Error>
        </P.InnerWrapper>
      </P.Body>

      <P.Button onClick={props.onClickUpload}>Sign up</P.Button>

      <P.GoSigninWrapper>
        <P.GoSigninText>Already have an account? ➤</P.GoSigninText>
        <P.GoSignin onClick={props.onClickSignin}>Go to Sign in</P.GoSignin>
      </P.GoSigninWrapper>
    </P.Wrapper>
  );
}
