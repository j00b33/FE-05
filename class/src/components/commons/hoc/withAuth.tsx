import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  // accessToken 여부 확인
  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저 해주세요");
      router.push("/example/hoc/login");
    }
  }, []);

  if (!accessToken) return <></>;
  return <Component {...props} />;
};

export default withAuth;
