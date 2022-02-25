export default function PromiseAllPage() {
  console.time("Promise start");
  const onClickPromise = async () => {
    //promise를 여러번 했을떄랑 Promise를 동시에 했을때랑 차이 보기
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 3000); //5초정도 걸리는 일이 있따고 치자
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 3000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 3000);
    });
    console.log(result3);
    console.timeEnd("Promise start"); //시작이랑 같은걸 적어줘야하는거임
    // ==> for loop 쓴거랑 같음
  };

  const onClickPromiseAll = async () => {
    //1. 하나하나 각각 입력하는 방법
    // console.time("PromiseAll start");
    // const results = await Promise.all([
    //   //배열을 넣어주면 여기 안에 넣은 Promise들은 동시에 요청이 감
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("영희");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("훈이");
    //     }, 3000);
    //   }),
    // ]);
    // // --> 전체를 한 뭉텅이로 await 하는거라서 promise.all에 await 선언
    // console.log(results);
    // console.timeEnd("PromiseAll start"); //시작이랑 같은걸 적어줘야하는거임

    //2. Map을 사용해서 간소화 하기
    console.time("PromiseAll start");
    const classmates = ["철수", "영희", "훈이"];
    const results = await Promise.all(
      classmates.map(
        (
          el //여기 중괄호가 들어가면 함수가 돼서 소괄호 넣어주는데 소괄호는 생략 가능
        ) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(results);
    console.timeEnd("PromiseAll start"); //시작이랑 같은걸 적어줘야하는거임
  };

  return (
    <div>
      <button onClick={onClickPromise}>시작하기</button>
      <button onClick={onClickPromiseAll}>시작하기 PromiseAll</button>
    </div>
  );
}
