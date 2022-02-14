//모의고사 수포자
const answerTable = [
  //1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  //2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  //3번 수포자가 찍는 방식
  [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
];

function solution(answers) {
  //학생들의 점수를 저장하는 배열 (앞에서부터 1번 학생의 점수, 2번 학생의 점수, 3번 학생의 점수)
  const score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answers[i] === answerTable[l][i % answerTable[l].length]) {
        score[l]++;
      }
    }
  }
  //가장 많이 맞춘 학생의 점수를 저장
  const biggest = Math.max(...score);

  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) {
      //가장 많이 맞춘 학생의 점수와 동일한 때만
      answer.push(i + 1);
    }
  }
  return answer;
}

//other way using method
const answerTable = [
  //1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  //2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  //3번 수포자가 찍는 방식
  [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
];

function solution(answers) {
  const answer = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });
  //가장 많이 맞춘 학생의 점수
  const biggest = Math.max(
    ...answer.map((el) => {
      return el.score;
    })
  );
  const answer2 = answer
    .filter((el) => {
      return el.score === biggest;
    })
    .map((el) => el.student);
  return answer2;
}
