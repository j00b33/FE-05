import LandingUIPage from "./landingpresenter";
import Router from "next/router";

export default function LandingPage(){

    const onClickHome = () => {
        Router.push(`/01-01-board/list`)
    }

    return(
        <LandingUIPage
        onClickHome={onClickHome}
        />
    )
}