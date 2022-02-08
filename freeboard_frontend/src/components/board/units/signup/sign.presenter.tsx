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
            placeholder="Enter your user-name"
            id="name"
            onChange={props.onChangeUserInput}
          ></P.Input>
          <P.Error>{props.idError}</P.Error>
        </P.InnerWrapper>

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

        <P.InnerWrapper>
          <P.Box>Age</P.Box>
          <P.Input
            type="text"
            placeholder="Enter your age"
            id="age"
            onChange={props.onChangeUserInput}
          ></P.Input>
          <P.Error>{props.idError}</P.Error>
        </P.InnerWrapper>
      </P.Body>

      <P.Button onClick={props.onClickUpload}>Sign up</P.Button>
    </P.Wrapper>
  );
}
