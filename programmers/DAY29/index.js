//예산
function solution(d, budget) {
  const answer = [];

  //모든 부서가 신청한 지원금에 따라 오름차순
  d.sort((a, b) => a - b);

  //부서들이 신청한 금액의 총 합
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}

//Using while loop
function solution(d, budget) {
  //모든 부서가 신청한 지원금에 따라 오름차순
  d.sort((a, b) => a - b);
  let answer = 0;
  while (budget - d[answer] >= 0) {
    budget -= d[answer];
    answer++;
  }
  return answer;
}

//using method
function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((money) => {
      //총 예산에서 지원금 차감
      budget -= money;

      if (budget >= 0) {
        return money;
      }
    });
  return answer.length;
}
