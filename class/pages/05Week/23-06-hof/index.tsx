import { MouseEvent } from "react";

export default function HofPage() {
  const onClickChild = (el: string) => (event: MouseEvent<HTMLDivElement>) => {
    console.log(el);
  };

  onClickChild;

  return (
    <div>
      <h1>HOF 연습 페이지</h1> {/* 의미적인 요소들 (시멘틱) */}
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
