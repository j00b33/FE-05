//행렬의 덧셈
function solution(arr1, arr2) {
  const answer = [[]];
  //1. arr1의 전체 배열 데이터를 조회
  for (let i = 0; i < arr1.length; i++) {
    //2. arr1 안에 있는 배열의 각각의 요소 데이터를 조회
    for (let l = 0; l < arr1[i].length; l++) {
      const sum = arr1[i][l] + arr2[i][l];
      //3. 행과 열에 해당되는 부분에 데이터를 넣기 위해 빈 배열값을 추가
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      //4. 행과 열에 해당되는 부분에 데이터를 추가
      answer[i][l] = sum;
    }
  }
  return answer;
}

//another method
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
}
