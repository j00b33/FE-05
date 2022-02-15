export default function MapElPage() {
  // //1. 기본 방법
  // ["철수", "영희", "훈이"].forEach((el, index) => {
  //   console.log(el);
  //   console.log(index);
  // });

  // //2. 매개변수 변경한 방법
  // ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //   console.log(asdf);
  //   console.log(qwer);
  // });

  // //3. 함수 선언식 방법
  // ["철수", "영희", "훈이"].forEach(function((asdf, qwer){
  //   console.log(asdf);
  //   console.log(qwer);
  // }));

  //4. 바꿔치기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log(index);
    console.log(el);
  });

  return <></>;
}

//map과 forEach ckdl:
//map에서 최종적으로 돌려보낸 결과가 담김 (const result = 이라고 했을때)
//forEach는 맵이랑 똑같이 철수 영희 훈이 한번씩 반복하지만 result에는 안넣어줌
