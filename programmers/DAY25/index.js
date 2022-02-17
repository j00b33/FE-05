//replace method
function solution(s) {
  //특정한 문자열을 해당하는 문자열로 변경
  let str = "abcde";
  str = str.replace("b", 2);
  console.log(str);
}
//result = a2cde

//replace method는 원본이 저장되지 않기때문에 s에 넣어주는거임
//replace는 가장 먼저 찾은 단어 하나만 바꿔줌 그래서 a2ba67 이렇게 있으면 12ba67 이런식으로 바뀌는거임
//--> 그래서 쓰는게 replaceAll 을 사용해줘야함
// 전체 문자열을 바꿔줌 replaceAll은
//--> str.replaceAll("a", 1) 하면 12b167

//프로그래머스에서는 replaceAll 지원이 안돼서 사용을 못함 js에서는 가능함
//그래서 while loop 사용해서 a가 없을때까지 while문을 돌려주겠다 해야됨

//숫자 문자열과 영단어
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      console.log(s, numbers[i]);
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

//method 사용해서 다른 방법으로 풀어보기
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  // console.log(s.split("zero").join(0))
  numbers.forEach((el, i) => {
    s = s.split(el).join(i);
    //split: 안쪽에 들어오는 인자를 기준으로 배열로 나눠줌
    console.log(s);
  });
  return Number(s);
}
//--> replaceAll과 동일하게 작동함

//정규표현식 사용해서 풀기
function solution(s) {
  //정규표현식
  //사용 방법은 / (슬래시 열고) / (슬래시 닫고) 로 시작됨
  //슬래시 안으로 검증할 문자열을 넣어준다
  //"g" 는 전체 문자열을 검사함 (전역검사)

  s = s.replace(/zero/g, "0");
  s = s.replace(/one/g, "1");
  s = s.replace(/two/g, "2");
  s = s.replace(/three/g, "3");
  s = s.replace(/four/g, "4");
  s = s.replace(/five/g, "5");
  s = s.replace(/six/g, "6");
  s = s.replace(/seven/g, "7");
  s = s.replace(/eight/g, "8");
  s = s.replace(/nine/g, "9");
  return Number(s);
}

//0-9까지 보기 편하게 줄이기 (정규표현식 동적으로 표현하기)
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  //정규표현식은 정수 할당이 사실상 불가능함
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    //new RegExp = (변경할 값, 옵션값)
    s = s.replace(regExp, i);
  }
  return Number(s);
}
