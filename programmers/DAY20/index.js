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

//other way but much simple
//===========================
//유클리드 호재법 => 최대공약수를 구하기 위한 알고리즘 공식

//큰 수를 작은 수로 나눴을때 (a가 큰 수이고 b가 작은수라면 --> a를 b로 나눈다.)
//나머지 값이 6이 되면 나눴던 작은 수 b가 최대공약수가 된다

function solution(n, m) {
  let a = m; //큰 수가 들어온다
  let b = n; //작은 수가 들어온다
  let r = 0; //a를 b로 나눴을 때의 나머지 값

  while (a % b > 0) {
    r = a % b;
    a = b; //큰 수에 작은 수를 할당
    b = r; //작은 수에는 나머지 값 할당
  }

  //최소공배수: n과 m을 곱한 값에 최대공약수를 나누면 최소공배수가 된다
  return [b, (n * m) / b];
}
