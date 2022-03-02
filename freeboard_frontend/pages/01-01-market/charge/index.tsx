import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import Head from "next/head";

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

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      updatedAt
    }
  }
`;

export default function ChargePage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const [amount, setAmount] = useState(0);

  const onChangeAmount = (event) => {
    setAmount(event.currentTarget.value);
    console.log(amount);
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

      {/* <input type="text" onChange={onChangeAmount} /> */}
      <button onClick={onChangeAmount} value={100}>
        100
      </button>
      <button onClick={onChangeAmount} value={300}>
        300
      </button>
      <button onClick={onChangeAmount} value={500}>
        500
      </button>
      <br />
      <div>Selected Point: {amount}</div>
      <button onClick={onClickPayment}>Charge</button>
      <div>Current Point: {data?.fetchUserLoggedIn?.userPoint.amount}</div>
    </div>
  );
}
