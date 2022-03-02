import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { AiTwotoneExperiment } from "react-icons/ai";
import { RiAliensLine } from "react-icons/ri";
import ChargePage from "../charge";
import * as M from "./styled";
import PaymentHistory from "../paymenthistory";
import { StylesProvider } from "@material-ui/core";

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

  const [isPayment, setIsPayment] = useState(false);
  const [isCharge, setIsCharge] = useState(false);

  const onClickPaymentPage = () => {
    setIsPayment(true);
    setIsCharge(true);
  };

  const onClickChargeZone = () => {
    setIsCharge(true);
  };

  const onClickHistory = () => {
    setIsCharge(false);
  };

  return (
    <M.Wrapper>
      <M.Header>
        <M.Title>
          <M.Title1>
            <AiTwotoneExperiment />
          </M.Title1>
          <M.Title2>{data?.fetchUserLoggedIn?.name}</M.Title2>
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
            <M.Navigation>My Profile ➤</M.Navigation>
            <M.Navigation onClick={onClickPaymentPage}>
              My Payment ➤
            </M.Navigation>
            <M.Navigation>My Posts ➤</M.Navigation>
          </M.MyPageNavigationWrapper>
        </M.BodyLeftWrapper>

        <M.DivisionLine />
        <M.BodyRightWrapper>
          {/* 이건 My Payment를 눌렀을시 실행되는 것들 */}
          {isPayment ? (
            <div>
              <M.PreSelectWrapper>
                <M.PresenterSelect onClick={onClickChargeZone}>
                  Point Charging
                </M.PresenterSelect>
                {" / "}
                <M.PresenterSelect onClick={onClickHistory}>
                  Payment History
                </M.PresenterSelect>
              </M.PreSelectWrapper>
              {isCharge ? <ChargePage /> : <PaymentHistory />}
            </div>
          ) : (
            "Main My Page Body Display"
          )}
        </M.BodyRightWrapper>
      </M.Body>
    </M.Wrapper>
  );
}
