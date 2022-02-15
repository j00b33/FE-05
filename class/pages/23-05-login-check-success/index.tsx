import { gql, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  //검증하기
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     alert("로그인을 먼저 해주세요");
  //     router.push("/23-04-login-check");
  //   }
  // });

  return <div> {data?.fetchUserLoggedIn.name}님 환영합니다</div>;
}

export default withAuth(LoginSuccessPage);
//withAuth 먼저 실행되고 loginSuccessPage가 실행되는거임
