import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  //초기값을 넣으면 에러가 안나는데 초기값이 없으면 에러가 남
  //이유는? : 타입스크립트가 아무것도 안넣으면 자기 맘대로 타입을 추론해냄 근데 그게 지금 undefined로 추론이 됨
  //그래서 undefined인데 왜 숫자 +1 을 하느냐 하면서 초기값이 비어있으면 에러가 남
  //그래서 초기값으로 추론을 하기때문에 0으로 넣고 number로 추론하게끔 해야함
  //만약 number말고 string이 들어가있다면 그것도 그거대로 오류가 남

  const onClickCountUp = () => {
    setCount(count + 1);
    //원본

    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    //이렇게 7개씩 넣는다고 해도 막상 실행해서 카운트 올리기 버튼 누르면 하나씩만 올라감
    //여러개가 있을때 7만큼 올라가는게 아니라 그냥 1만큼씩만 올라간다는것
    //setState를 하게되면 그 자체에서 바로 카운트가 올라가는게 아님
    //js는 위에서부터 하나씩 실행이 되는데 이때 임시저장공간에 count:1로 저장을 해둠
    //아직 저장이 된게 아니기때문에 계속 0에서 count+1을 하래 가 7번 반복 ==> 효과 없음

    // setCount((prev) => prev + 1)
    // setCount((prev) => prev + 1)
    // setCount((prev) => prev + 1)
    // setCount((prev) => prev + 1)
    // setCount((prev) => prev + 1)
    //prev = 기존 카운트 값
    //기존 카운트값에 값이 저장이 되어있으면 그게 임시저장공간에 계속 축적되는 형식
    //--> 자세히
    //count에 1을 더하래 하고 임시저장공간에 저장이 일단 됨
    //두번째줄 갔을때 prev를 가는데 1이라는 원본이 있음 그럼 그걸 가지고 와서 count를 2로 바꿔주게 됨
    //3번째줄 가면 2에 1을 더해서 3 되고 그러는 식으로
    //결과적으로는 5씩 늘어남
  };

  return (
    <div>
      <div>Current Count: {count}</div>
      <button onClick={onClickCountUp}>Count Up</button>
    </div>
  );
}
