//3진법 뒤집기
function solution(n) {
  //3진법으로 변환
  n = n.toString(3);

  //앞뒤를 반전
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }

  //뒤집은 3진법 데이터를 10진법으로 변환
  return parseInt(reverse, 3);
}

//other way
function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}

//이진 변환 반복하기
function solution(s) {
  var answer = [];
  return answer;
}

//이진 변환 반복하기
function solution(s) {
  let count = 0;
  let remove = 0;

  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue; //이 반복문에서 잠깐 멈췄다가 다음으로 넘어감
      }
      temp += s[i]; // ==="1"
    }
    s = temp.length;
    s = s.toString(2);
  }
  return [count, remove];
}

// Using recursion function
//재귀 함수 (recursion function)
//1. 함수를 반복 실행 (자기 자신을 반복실행)
//2. 종료되는 시점을 꼭 정해줘야함
function recursion(count) {
  if (count >= 5) {
    console.log(count);
    return; //재귀함수 종료
  }
  count++;
  return recursion(count);
}
recursion;
//while문 대신 사용 가능 (내가 원하는 값이 나올때까지 돌리는거)

// -->

function solution(s) {
  let [count, remove] = [0, 0];

  function recursion(s) {
    if (s === "1") {
      return [count, remove];
    }

    remove += s.split("").filter((el) => el === "0").length;
    s = s.split("").filter((el) => el === "1").length;

    count++;
    return recursion(s.toString(2));
  }
  return recursion(s); //s를 인자값으로 다시 보내줌
}
