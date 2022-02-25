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
    //basketEl은 장바구니에 담겨있는 element
    //같은게 있다면 필터링해줘
    //temp에 아이디가 담겨있다는건 이미 기존에 한번 담겨있었다는거
    //temp의 길이가 0인지 1인지에 따라서 구분할 수 있는거임
    if (temp.length === 1) {
      //temp.length ===1 이라는건 내가 선택한게 이미 장바구니에 있다는거 (중복된 아이디 걸러내기)
      alert("이미 장바구니에 담겨있습니다");
      return;
    }

    //Board 인자 제거하고싶음
    // delete el.__typename //원본 건드리는거 좋은 방법이 아님
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
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
