//피보나치 수 구하기
// 0, 1, 1(0+1), 2(1+1). 3(1+2) ...

function solution(n) {
  let prev = 0; // F(n-2) // 0번째 피보나치 수가 초기값
  let next = 1; // F(n-1) // 1번째 피보나치 수가 초기값
  let sum = 1; // F(n-2) // 2번째 피보나치 수가 초기값

  const answer = [];
  for (let i = 2; i <= n; i++) {
    sum = (prev + next) % 1234567;
    prev = next; //n-2의 값에 n-1
    next = sum;

    answer.push(sum);
  }
  return answer[n - 2];
}

//피보나치 수에서 마지막에 나누는게 아니라 피보나치를 구한 숫자에 나눠주는 이유
// type number : Int type
// 2 ** 53 -1

// a = 9007199254740991
// a + 6

// Number.isSafeInteger ( a )
// Number.isSafeInteger ( a + 1 )

// Number.MAX_SAFE_INTEGER

//Other way using reduce method
function solution(n) {
  let prev = 0; // F(n-2) // 0번째 피보나치 수가 초기값
  let next = 1; // F(n-1) // 1번째 피보나치 수가 초기값
  let sum = 1; // F(n-2) // 2번째 피보나치 수가 초기값

  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;

    return sum;
  }, sum);

  return answer;
}
