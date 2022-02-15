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
          <P.Box>Username</P.Box>
          <P.Input
            type="text"
            placeholder="Username must be at least 2 letters"
            id="name"
            onChange={props.onChangeName}
          ></P.Input>
          <P.Error>{props.nameError}</P.Error>
        </P.InnerWrapper>

        <P.InnerWrapper>
          <P.Box>Email</P.Box>
          <P.Input
            type="text"
            placeholder="Enter your Email"
            id="id"
            onChange={props.onChangeEmail}
          ></P.Input>
          <P.Error>{props.emailError}</P.Error>
        </P.InnerWrapper>

        <P.InnerWrapper>
          <P.Box>Password</P.Box>
          <P.Input
            type="password"
            placeholder="Password must be at least 4 letters"
            id="password"
            onChange={props.onChangePw}
          ></P.Input>
          <P.Error>{props.passwordError}</P.Error>
        </P.InnerWrapper>

        <P.InnerWrapper>
          <P.Box>Age</P.Box>
          <P.Input
            type="text"
            placeholder="Age cannot exceed 2 digits"
            id="age"
            onChange={props.onChangeAge}
          ></P.Input>
          <P.Error>{props.ageError}</P.Error>
        </P.InnerWrapper>
      </P.Body>

      <P.Button onClick={props.onClickUpload}>Sign up</P.Button>
    </P.Wrapper>
  );
}
