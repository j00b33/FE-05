import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("Rendering Container");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []); //다시 안말들어지게끔 Dependency Array

  // //useMemo로 useCallback 만들기
  // const onClickCountState = useMemo(() => {
  //   return () => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   };
  // }, []);

  //다시 원래 함수
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
    //카운트 올라갈때마다 화면에 다시 찍어져서 숫자가 올라가는게 화면에 그려짐
    //변한 state로 다시 그려진다는 것
    //==> 근데 use빼고 다 다시 만들어지는것이기 떄문에 비효율적
    //another problem: 이 페이지에 딸려있는 다른 컴포넌트까지 다 다시 rendering 됨
  }, []);

  return (
    <div>
      <div>=============</div>
      <h1>Container Page</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) + 1</button>

      <div>=============</div>
      <MemoizationPresenterPage />
    </div>
  );
}

//presenterPage까지 다시 렌더링 되는중 => 비효율적!
// => 최적화하는 법:

//memo 사용하면 Presenter는 렌더링 대상이지만 렌더링되는건 container만
