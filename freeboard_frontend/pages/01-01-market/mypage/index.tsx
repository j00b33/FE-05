import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { AiTwotoneExperiment } from "react-icons/ai";
import { RiAliensLine } from "react-icons/ri";
import ChargePage from "../charge";
import * as M from "./styled";
import ChargeHistory from "../../history/chargehistory";
import PurchaseHistory from "../../history/purchasehistory/purchasehistory";
import SaleHistory from "../../history/salehistory/salehistory";
import { useRouter } from "next/router";
import SettingsPage from "../settings";
import MyPageMainUI from "../mypageui";
import { FaBullseye } from "react-icons/fa";
import withAuth from "../../../src/components/commons/hoc/withAuth";
import WrittenPostsPage from "../writtenposts";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

const MyPage = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  const [isMyPage, setIsMyPage] = useState(true);

  const [isSettings, setIsSettings] = useState(false);

  const [isWrittenPosts, setIsWrittenPosts] = useState(false);

  const [isPayment, setIsPayment] = useState(false);
  const [isCharge, setIsCharge] = useState(false);
  const [isChargeHistory, setIsChargeHistory] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  const [isSale, setIsSale] = useState(false);

  const onClickMyPage = () => {
    router.push("/01-01-market/mypage");
    setIsMyPage(true);

    setIsSettings(false);
    setIsCharge(false);
    setIsChargeHistory(false);
    setIsPurchase(false);
    setIsSale(false);
    setIsWrittenPosts(false);

    setIsPayment(false);
    setIsCharge(false);
  };

  const onclickSettingsPage = () => {
    setIsMyPage(false);
    setIsWrittenPosts(false);

    setIsSettings(true);
    setIsCharge(false);
    setIsChargeHistory(false);
    setIsPurchase(false);
    setIsSale(false);

    setIsPayment(false);
    setIsCharge(false);
  };

  const onClickPaymentPage = () => {
    setIsMyPage(false);
    setIsWrittenPosts(false);
    setIsSettings(false);
    setIsPayment(true);
    setIsCharge(true);
  };

  const onClickWrittenPosts = () => {
    setIsWrittenPosts(true);

    setIsMyPage(false);
    setIsSettings(false);
    setIsCharge(false);
    setIsChargeHistory(false);
    setIsPurchase(false);
    setIsSale(false);

    setIsPayment(false);
    setIsCharge(false);
  };

  //충전 and 내역
  const onClickChargeZone = () => {
    setIsMyPage(false);
    setIsWrittenPosts(false);

    setIsSettings(false);

    setIsCharge(true);
    setIsChargeHistory(false);
    setIsPurchase(false);
    setIsSale(false);
  };
  const onClickHistory = () => {
    setIsMyPage(false);

    setIsWrittenPosts(false);

    setIsSettings(false);
    setIsCharge(false);
    setIsChargeHistory(true);
    setIsPurchase(false);
    setIsSale(false);
  };

  //구매 and 내역
  const onClickPurchase = () => {
    setIsMyPage(false);
    setIsWrittenPosts(false);

    setIsSettings(false);
    setIsCharge(false);
    setIsChargeHistory(false);
    setIsPurchase(true);
    setIsSale(false);
  };

  const onClickSale = () => {
    setIsMyPage(false);

    setIsWrittenPosts(false);
    setIsSettings(false);
    setIsCharge(false);
    setIsChargeHistory(false);
    setIsPurchase(false);
    setIsSale(true);
  };

  return (
    <M.Wrapper>
      <M.Header>
        <M.Title>
          <M.Title1>
            <AiTwotoneExperiment />
          </M.Title1>
          <M.Title2 onClick={onClickMyPage}>
            {data?.fetchUserLoggedIn?.name}
          </M.Title2>
          <M.Title3>'s Zone</M.Title3>
        </M.Title>
      </M.Header>

      <M.Body>
        <M.BodyLeftWrapper>
          <M.ProfileWrapper>
            <M.ProfilePic>
              <RiAliensLine />
            </M.ProfilePic>
            <M.SubTitle>{data?.fetchUserLoggedIn?.name}</M.SubTitle>
          </M.ProfileWrapper>

          <M.PaymentWrapper>
            <M.UserMoney>
              ${data?.fetchUserLoggedIn?.userPoint.amount}
            </M.UserMoney>
          </M.PaymentWrapper>

          <M.MyPageNavigationWrapper>
            <M.Navigation
              onClick={onclickSettingsPage}
              style={{ color: isSettings ? "#9900ff" : "black" }}
            >
              Edit Profile ➤
            </M.Navigation>
            <M.Navigation
              onClick={onClickPaymentPage}
              style={{ color: isPayment ? "#9900ff" : "black" }}
            >
              Payment ➤
            </M.Navigation>
            <M.Navigation
              onClick={onClickWrittenPosts}
              style={{ color: isWrittenPosts ? "#9900ff" : "black" }}
            >
              Written Posts ➤
            </M.Navigation>
          </M.MyPageNavigationWrapper>
        </M.BodyLeftWrapper>

        <M.DivisionLine />
        <M.BodyRightWrapper>
          {isMyPage && <MyPageMainUI />}
          {/* 이건 Navigation을 눌렀을시 실행되는 것들 */}
          {isSettings && <SettingsPage />}
          {isWrittenPosts && <WrittenPostsPage />}
          {isPayment && (
            <div>
              <M.PreSelectWrapper>
                <M.PresenterSelect
                  onClick={onClickChargeZone}
                  style={{ color: isCharge ? "black" : "grey" }}
                >
                  Charge Money
                </M.PresenterSelect>
                {" | "}
                <M.PresenterSelect
                  onClick={onClickHistory}
                  style={{ color: isChargeHistory ? "black" : "grey" }}
                >
                  Charge History
                </M.PresenterSelect>
                {" | "}
                <M.PresenterSelect
                  onClick={onClickPurchase}
                  style={{ color: isPurchase ? "black" : "grey" }}
                >
                  Purchase History
                </M.PresenterSelect>
                {" | "}
                <M.PresenterSelect
                  onClick={onClickSale}
                  style={{ color: isSale ? "black" : "grey" }}
                >
                  Sale History
                </M.PresenterSelect>
              </M.PreSelectWrapper>

              {isCharge && <ChargePage />}
              {isChargeHistory && <ChargeHistory />}
              {isPurchase && <PurchaseHistory />}
              {isSale && <SaleHistory />}
            </div>
          )}
        </M.BodyRightWrapper>
      </M.Body>
    </M.Wrapper>
  );
};

export default withAuth(MyPage);
