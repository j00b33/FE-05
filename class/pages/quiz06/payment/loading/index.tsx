import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);

  const onClick500 = () => {
    setAmount(500);
  };

  const onClick1000 = () => {
    setAmount(1000);
  };

  const onClick2000 = () => {
    setAmount(2000);
  };

  const onClick5000 = () => {
    setAmount(5000);
  };

  const router = useRouter();

  const onClickPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp13990733"); // Example: imp00000000

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "코드캠프퀴즈",
        amount: amount,
        buyer_email: "joobee0307@naver.com",
        buyer_name: "박주비",
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울",
        buyer_postcode: "01181",
      },
      (rsp) => {
        if (rsp.success) {
          console.log(rsp);
          new Date();
          router.push("/quiz06/payment/complete");
        } else {
          alert("결제에 실패했습니다");
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
      <button onClick={onClick500}>500원</button>
      <button onClick={onClick1000}>1000원</button>
      <button onClick={onClick2000}>2000원</button>
      <button onClick={onClick5000}>5000원</button>
      <button onClick={onClickPay}>결제하기</button>
    </div>
  );
}
