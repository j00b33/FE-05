import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../../_app";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  // const router = useRouter();
  //user 가져오는중

  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // // ⬆️ 이걸 글로번 스테이트로 바꾸는 방법 ⬇️
  const { userInfo } = useContext(GlobalContext);

  //검증하기
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     alert("로그인을 먼저 해주세요");
  //     router.push("/23-04-login-check");
  //   }
  // });

  return <div> {userInfo?.name}님 환영합니다</div>;
}

export default withAuth(LoginSuccessPage);
//withAuth 먼저 실행되고 loginSuccessPage가 실행되는거임
