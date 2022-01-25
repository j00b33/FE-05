//자연수 뒤집어 배열로 만들기
function solution(n) {
  const answer = [];
  n = n.toString();
  // for (let i =n.length-1; i>=0; i--){
  //     answer.push(Number(n[i]))
  // }

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  return answer.reverse();
}


//or method 이용
function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((el) => {
      return Number(el);
    });
  return answer.reverse();
}







//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];
    
    for(let i=0; i<arr.length; i++){
        if (arr[i]%divisor === 0){
            answer.push( arr[i] )
        }
    }
    return answer.length === 0
    ? [-1] //빈 배열이면
    : answer.sort(( a,b)=> a-b)
    //빈 배열이 아니라면 오름차순으로 정렬 후 리턴
}

//or method 사용해서 풀기
function solution(arr, divisor) {
    const answer = arr.filter(num =>{
        return num  % divisor === 0
    })
    return answer.length === 0
    ?[-1]
    : answer.sort((a,b) => a-b)
}