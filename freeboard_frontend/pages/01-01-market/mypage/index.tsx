import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiTwotoneExperiment } from "react-icons/ai";
import { RiAliensLine } from "react-icons/ri";
import { FiTool } from "react-icons/fi";
import ChargePage from "../charge";
import * as M from "./styled";
import { GrMoney } from "react-icons/gr";
import { FaRegPaperPlane } from "react-icons/fa";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isCharge, setIsCharge] = useState(false);

  const router = useRouter();

  const onClickPaymentPage = () => {
    setIsCharge(true);
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
            <M.UserMoney>${"10,000"}</M.UserMoney>
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
          {isCharge ? (
            <div>
              <M.SubTitle>Point Charging</M.SubTitle>
              <ChargePage />
            </div>
          ) : (
            "Main My Page Body Display"
          )}
        </M.BodyRightWrapper>
      </M.Body>
    </M.Wrapper>
  );
}
