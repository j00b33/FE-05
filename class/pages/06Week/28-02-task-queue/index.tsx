//싸이월드 때 했던 내용 복습
// setInterval(() => {
//     document.getElementById("timer")?.innerText = "2:59"
// }, 1000)

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("===start===");

    setTimeout(() => {
      console.log("Executed after 1 sec");
    }, 1000); //after a second, the console will appear
    //---> 비동기 함수

    let sum = 0;
    for (let i = 0; i <= 9000000; i++) {
      sum = sum + 1;
    }

    console.log("===end===");
  };
  return <button onClick={onClickTimer}>시작</button>;
}

//sequence => start -> end -> executed after 1 sec
