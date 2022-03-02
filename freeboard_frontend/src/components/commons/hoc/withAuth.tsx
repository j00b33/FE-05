import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  // accessToken 여부 확인
  useEffect(() => {
    // if (!localStorage.getItem("accessToken")) {
    //   Modal.warn({ content: "Join us to view more :)" });
    //   router.push("/01-01-board/signin");
    //   //accessToken 없다면 signin page로 이동
    // }

    async function getToken() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          Modal.error({ content: "Should login first" });
          router.push("/01-01-board/signin");
        }
      }
    }
    getToken();
  }, []);

  // if (!accessToken) return <></>;
  return <Component {...props} />;
};

export default withAuth;
