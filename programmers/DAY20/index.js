//최대공약수 최소공배수 구하기
function solution(n, m) {
  //최대공약수 : 두 수의 약수중에서 (공통되는) 제일 큰 수
  //최소공배수 : 두 수의 배수중에서 (공통되는) 제일 작은 수

  //최대공약수 구하기
  let max = 0;
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  //최소공배수 구하기
  let min = 0;
  for (let i = m; i <= n * m; i += m) {
    if (i % n === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}
