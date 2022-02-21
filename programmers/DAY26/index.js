//체육복 도난당함 //3번이 도난당했으면 2번이랑 4번한테만 여벌을 빌릴 수 있음
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b); // 오름차순
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);
  //체육복을 잃어어버린 학생들의 수를 뺀 값을 초기값으로 지정
  // (= 체육수업을 들을 수 있는 학생의 수)
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // console.log(lost[i])
    if (reserve.includes(lost[i] - 1)) {
      //자기번호가 아니라 내 앞에 있는 학생의 번호를 찾는거임 (잃어버린 학생의 앞 번호를 조회)
      // console.log(lost[i], reserve)
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;
    }

    //잃어버린 학생의 뒷번호를 조회
    else if (reserve.includes(lost[i] + 1)) {
      //뒷번호에 옷을 빌려줄 수 있는 사람이 있다면
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

//method 사용해서
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b); // 오름차순
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  //체육복을 잃어어버린 학생들의 수를 뺀 값을 초기값으로 지정
  // (= 체육수업을 들을 수 있는 학생의 수)
  let answer = n - lost.length;

  lost.forEach((student) => {
    //앞에 있는 학생의 인덱스 값 번호를 가져온다
    const prev = reserve.indexOf(student - 1);
    //뒤에 있는 학생의 인덱스 값 번호를 가져온다
    const next = reserve.indexOf(student + 1);

    if (prev !== -1) {
      //앞에 학생이 있을 경우 (여벌복이 있는 학생인 경우)
      answer++;
      reserve.splice(prev, -1);
    } else if (next !== -1) {
      //뒤에 학생이 있는 경우 (여벌복이 있는 학생인 경우)
      answer++;
      reserve.splice(next, 1); //뒤로부터 하나를 제거하겠다
    }
  });

  return answer;
}
