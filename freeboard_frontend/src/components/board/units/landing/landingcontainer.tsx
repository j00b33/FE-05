import LandingUIPage from "./landingpresenter";
import Router from "next/router";

export default function LandingPage() {
  const onClickHome = () => {
    Router.push(`/01-01-market/home`);
  };

  return <LandingUIPage onClickHome={onClickHome} />;
}
