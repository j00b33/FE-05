import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();

    //이게 callback 함수
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split("")[0]; //random숫자 가져오기

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log("Final Value ");
          console.log(JSON.parse(res.target.response));
        });
      });
    });
  };

  //   const Result = new Promise((resolve, reject) => {
  //     const ccc = new XMLHttpRequest();
  //     ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
  //     ccc.send();
  //     ccc.addEventListener("load", (res: any) => {
  //       resolve(res);
  //     });
  //   }).then((res)=>{})

  const onClickPromise = () => {
    //promise 는 직관적이지 못함 // callback 지옥은 해결했다고 하더라도
    console.log("This is 1");
    const result = axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("This is 2");
        const num = res.data.split("")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("This is 3");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("This is 4");
        console.log(res);
      });
    console.log("This is 5");
  };

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split("")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    //prettier-ignore
    const res3 = await axios.get(`http://kopreanjson.com/posts?userId=${userId}`)
    console.log(res3);

    await fetch();
  };

  return (
    <div>
      <button onClick={onClickCallback}>Request Callback</button>
      <button onClick={onClickPromise}>Request Promise</button>
      <button onClick={onClickAsyncAwait}>Request AsyncAwait</button>
    </div>
  );
}
