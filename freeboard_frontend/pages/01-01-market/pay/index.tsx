export default function PayPage() {
  const onClickPayment = () => {
    console.log("Payment Function Here");
  };
  return (
    <div>
      <div>Payment Page</div>
      <div onClick={onClickPayment}>Click to Pay</div>
    </div>
  );
}
