import { useState } from "react";

export default function MapElPage() {
  const [count, setCount] = useState(0);

  //1. 화살표 함수
  // const onClickCount = () => {
  //   setCount((prev) => prev + 1);
  // };
  //==============================
  //2. 그냥 함수
  // setCount(function (prev)){
  //   //로직도 추가 가능 ...
  //   return prev + 1
  // })
  //==============================
  //3. 매개변수 바꿔보기
  const onClickCount = () => {
    setCount((asdf) => asdf + 1);
  };

  return (
    <div>
      <div>현재 카운트 {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </div>
  );
}

//map과 forEach 차이:
//map에서 최종적으로 돌려보낸 결과가 담김 (const result = 이라고 했을때)
//forEach는 맵이랑 똑같이 철수 영희 훈이 한번씩 반복하지만 result에는 안넣어줌
