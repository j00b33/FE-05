//완주하지 못한 선수 리턴하기
//what I did
function solution(participant, completion) {
  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (!completion.includes(participant[i])) {
      answer = participant[i];
      return answer;
    }
  }
}

//In-class 1
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
}

//splice()
// 배열에서 사용 가능한 메서드
// 배열의 특정 인덱스 값으로부터 데이터를 삭제할 수 있다
// 배열의 특정 인덱스 값으로부터 데이터를 추가할 수 있다
// 원본이 저장이 된다

arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
//result: 3

//2번째 인덱스부터 하나를 지우겠다!
//splice는 제거한 인덱스의 데이터를 반환함
//원본이 저장이 되기 때문에 다시 담지 말고 array를 다시 찍으면 3이 제거된 [1,2,4,5] 를 받게 됨

arr.splice(2, 1, 0, 1, 2, 3);
//이렇게 하면 2번 인덱스부터 하나를 0,2,3으로 대체하겠다 라는말이 됨
//result: [1,2,0,1,2,3,4,5]

//효율적으로 2
function solution(participant, completion) {
  //문자열 오름차순
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort();

  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

//method 3
function solution(participant, completion) {
  //문자열 오름차순
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
