import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import Head from "next/head";
import * as C from "./styled";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

export default function ChargePage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const [amount, setAmount] = useState(0);

  const onChangeAmount = (event) => {
    setAmount(event.currentTarget.value);
  };

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "Payment Money Charge",
        amount: amount,
        buyer_email: "enter your email",
        buyer_name: data?.fetchUserLoggedIn?.name,
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "00000",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log("rsp 확인");
          console.log(rsp);

          const result = createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          new Date();
        }
      }
    );
  };

  return (
    <C.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <C.Header>Charging Zone</C.Header>
      <C.ButtonWrapper>
        <C.SelectAmount onClick={onChangeAmount} value={500}>
          500
        </C.SelectAmount>
        <C.SelectAmount onClick={onChangeAmount} value={1000}>
          1000
        </C.SelectAmount>
        <C.SelectAmount onClick={onChangeAmount} value={3000}>
          3000
        </C.SelectAmount>
        <C.SelectAmount onClick={onChangeAmount} value={5000}>
          5000
        </C.SelectAmount>
      </C.ButtonWrapper>

      <C.Selected>Selected Point: {amount}</C.Selected>
      <C.ChargeButton onClick={onClickPayment}>Charge</C.ChargeButton>
      <div>Current Point: {data?.fetchUserLoggedIn?.userPoint.amount}</div>
    </C.Wrapper>
  );
}
