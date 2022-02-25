//싸이월드 때 했던 내용 복습
// setInterval(() => {
//     document.getElementById("timer")?.innerText = "2:59"
// }, 1000)

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("===start===");

    //비동기 작업 (메크로큐에 들어감)
    setTimeout(() => {
      console.log("setTimeout -- mecroqueue -- Executed after 0 sec");
    }, 1000); //after a second, the console will appear
    //---> 비동기 함수

    new Promise((resolve) => {
      resolve("철수");
    }).then((res) => {
      console.log("Promise -- MicroQueue -- executed after 0 sec");
    });

    //비동기 작업 (메크로큐에 들어감)
    setInterval(() => {
      console.log("setInterval -- MecroQueue -- Executed every 0 sec");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 9000000; i++) {
      sum = sum + 1;
    }

    new Promise((resolve) => {
      resolve("철수");
    }).then((res) => {
      console.log("Promise -- MicroQueue -- Executed After 0 sec - 2");
    });

    console.log("===end===");
  };
  return <button onClick={onClickTimer}>시작</button>;
}

//sequence => start -> end -> executed after 1 sec
