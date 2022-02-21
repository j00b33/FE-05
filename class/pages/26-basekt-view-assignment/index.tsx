import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

//로그인해서 접속해왔을때 어떻게 보여질 것인지 (로그인을 했다고 가정하고)

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <div>
      <h1>비회원 장바구니</h1>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}
