import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  // accessToken 여부 확인
  useEffect(() => {
    if (!accessToken) {
      Modal.warn({ content: "Join us to view more :)" });
      router.push("/01-01-board/signin");
      //accessToken 없다면 signin page로 이동
    }
  }, []);

  if (!accessToken) return <></>;
  return <Component {...props} />;
};

export default withAuth;
