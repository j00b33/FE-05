// 2016.01.01 : FRI
// +0 : FRI // +1 : SAT ...
//1월 1일 기준 14일이 지나면? => 1월 15일 (2주 경과) => FRI
//21일 지나면? => 3주 경과 => FRI
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "Mon", "TUE", "WED", "THU"];

function solution(a, b) {
  //총 일수를 저장하는 변수
  let days = 0;

  for (let i = 1; i < a; i++) {
    //이전 월까지만 가져옴
    days += month[i];
  }
  days += b - 1;
  return week[days % 7];
}

//other method
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "Mon", "TUE", "WED", "THU"];

function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? //이전 월일 경우 (1~4)
          month[mn]
        : //해당 월이 아닐 경우
          b - 1)
    );
  }, 0);
  return week[answer % 7];
}

//new Date
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "Mon", "TUE", "WED", "THU"];

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];
}
