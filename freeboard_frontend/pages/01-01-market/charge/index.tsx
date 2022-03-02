import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import Head from "next/head";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
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
  const [amount, setAmount] = useState(0);

  const onChangeAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp13990733");
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "Payment Money Charge",
        amount: amount,
        buyer_email: "enter your email",
        buyer_name: data.fetchUserLoggedIn?.name,
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "00000",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          //백엔드에 결제관련 데이터 넘겨주기
          //=> 즉, 뮤테이션 실행
          //ex) createPointTransactionOfLoading
          new Date();
        }
      }
    );
  };

  return (
    <div>
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
      결제금액: <input type="text" onChange={onChangeAmount} />
      <br />
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}
