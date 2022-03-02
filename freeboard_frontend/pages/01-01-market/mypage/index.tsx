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

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  const [isSettings, setIsSettings] = useState(false);

  const [isPayment, setIsPayment] = useState(false);
  const [isCharge, setIsCharge] = useState(false);
  const [isChargeHistory, setIsChargeHistory] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  const [isSale, setIsSale] = useState(false);

  const onClickMyPage = () => {
    router.push("/01-01-market/mypage");
  };

  const onclickSettingsPage = () => {
    setIsSettings(true);
    setIsCharge(false);
    setIsChargeHistory(false);
    setIsPurchase(false);
    setIsSale(false);

    setIsPayment(false);
    setIsCharge(false);
  };

  const onClickPaymentPage = () => {
    setIsSettings(false);
    setIsPayment(true);
    setIsCharge(true);
  };

  //충전 and 내역
  const onClickChargeZone = () => {
    setIsSettings(false);

    setIsCharge(true);
    setIsChargeHistory(false);
    setIsPurchase(false);
    setIsSale(false);
  };
  const onClickHistory = () => {
    setIsSettings(false);
    setIsCharge(false);
    setIsChargeHistory(true);
    setIsPurchase(false);
    setIsSale(false);
  };

  //구매 and 내역
  const onClickPurchase = () => {
    setIsSettings(false);
    setIsCharge(false);
    setIsChargeHistory(false);
    setIsPurchase(true);
    setIsSale(false);
  };

  const onClickSale = () => {
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
          <M.Title3>Zone</M.Title3>
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
            <M.Navigation onClick={onclickSettingsPage}>
              My Profile ➤
            </M.Navigation>
            <M.Navigation onClick={onClickPaymentPage}>
              My Payment ➤
            </M.Navigation>
            <M.Navigation>My Posts ➤</M.Navigation>
          </M.MyPageNavigationWrapper>
        </M.BodyLeftWrapper>

        <M.DivisionLine />
        <M.BodyRightWrapper>
          {/* 이건 Navigation을 눌렀을시 실행되는 것들 */}
          {isSettings ? <SettingsPage /> : ""}
          {isPayment && (
            <div>
              <M.PreSelectWrapper>
                <M.PresenterSelect onClick={onClickChargeZone}>
                  Charge Money
                </M.PresenterSelect>
                {" | "}
                <M.PresenterSelect onClick={onClickHistory}>
                  Charge History
                </M.PresenterSelect>
                {" | "}
                <M.PresenterSelect onClick={onClickPurchase}>
                  Purchase History
                </M.PresenterSelect>
                {" | "}
                <M.PresenterSelect onClick={onClickSale}>
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
}
