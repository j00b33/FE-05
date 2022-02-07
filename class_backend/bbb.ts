//decorator 예제

function qqq(aaaa: any) {
  console.log("===========");
  console.log(aaaa);
  console.log("===========");
}

@qqq //아래 내용이 qqq인자로 들어가게 됨
class MyBoard {}
