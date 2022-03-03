import { useRouter } from "next/router";
import LandingUIPage from "./landingpresenter";

export default function LandingPage() {
  const router = useRouter();

  const onClickCommunity = () => {
    router.push("/01-01-board/list");
  };

  const onClickMarket = () => {
    router.push("/01-01-market/home");
  };

  const onClickMyPage = () => {
    router.push("/01-01-market/mypage");
  };

  return (
    <LandingUIPage
      onClickCommunity={onClickCommunity}
      onClickMarket={onClickMarket}
      onClickMyPage={onClickMyPage}
    />
  );
}
