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
