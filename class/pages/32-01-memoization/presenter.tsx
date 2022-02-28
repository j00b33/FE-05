import { memo } from "react";

export const MemoizationPresenterPage = () => {
  console.log("Rendering Presenter");

  return (
    <div>
      <div>=============</div>
      <h1>Presenter Page</h1>
      <div>=============</div>
    </div>
  );
};

export default memo(MemoizationPresenterPage);
//근데 만약 props가 들어온다면 props 안에서 countState를 쓰던 안쓰던 countState의 바뀐 값이 들어오는거기 때문에 presenter도 리렌더링이 됨
