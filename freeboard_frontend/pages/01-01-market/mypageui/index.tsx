import { gql, useQuery } from "@apollo/client";
import * as M from "./styled";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
      createdAt
    }
  }
`;

export default function MyPageMainUI() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <M.Wrapper>
      <M.Header>User Information</M.Header>

      <M.BodyWrapper>
        <M.EachRow>
          <M.UserImage src={"/cheese.png"} />
        </M.EachRow>
        <M.EachRow>
          <M.Alert>Username: </M.Alert>
          <M.UserInfo>{data?.fetchUserLoggedIn?.name}</M.UserInfo>
        </M.EachRow>

        <M.EachRow>
          <M.Alert>Account Creation Date: </M.Alert>
          <M.UserInfo>
            {data?.fetchUserLoggedIn?.createdAt.slice(0, 10)}
          </M.UserInfo>
        </M.EachRow>
      </M.BodyWrapper>
    </M.Wrapper>
  );
}
