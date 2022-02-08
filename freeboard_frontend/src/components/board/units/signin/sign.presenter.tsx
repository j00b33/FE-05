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
          <P.Box>ID</P.Box>
          <P.Input
            type="text"
            placeholder="Enter your ID"
            id="id"
            onChange={props.onChangeUserInput}
          ></P.Input>
          <P.Error>{props.idError}</P.Error>
        </P.InnerWrapper>

        <P.InnerWrapper>
          <P.Box>Password</P.Box>
          <P.Input
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={props.onChangeUserInput}
          ></P.Input>
          <P.Error>{props.idError}</P.Error>
        </P.InnerWrapper>
      </P.Body>

      <P.Button onClick={props.onClickUpload}>Sign in</P.Button>
    </P.Wrapper>
  );
}
