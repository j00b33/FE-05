import { useState } from "react";
import Head from "next/head";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp13990733"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        //  m_redirect_url: 모바일 결재시 돌아갈 주소
        //이 괄호 속 내용으로 결제페이지가 만들어짐
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          //백엔드에 결제관련 데이터 넘겨주기
          //=> 즉, 뮤테이션 실행
          //ex) createPointTransactionOfLoading
          new Date();
        } else {
          // 결제 실패 시 로직
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

//portfolio 할땐: imp49910675
