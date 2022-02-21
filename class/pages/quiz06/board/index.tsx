import { gql, useQuery } from "@apollo/client";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    console.log(el);

    // localStorage.getItem("Basket") //문자열임 "{}" 그래서 객체로 돌려놔야함
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    //데이터가 있으면 basket에 더해나가고 없으면 빈객체에 더해나가고

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    //같은게 있다면 필터링
    if (temp.length === 1) {
      alert("이미 장바구니에 담겨있습니다");
      return;
    }

    //Board 인자 제거
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={isCancel ? onClickCancel(props.el) : onClickAdd(props.el)}
      >
        {isCancel ? "담기취소" : "게시글담기"}></button>
        </div>
      ))}
    </div>
  );
}
