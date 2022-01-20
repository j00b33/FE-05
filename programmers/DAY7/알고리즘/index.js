//짝홀수
function solution(num) {
    if (num%2 == 0){
        return "Even";
    }
    else if (num%2 == 1){
        return "Odd";
    }
}


//평균값 구하기
function solution(arr) {
    let answer = 0;
    for (let i=0;i<arr.length;i++){
        answer = answer+arr[i]
    }
    return (answer/arr.length)
}


//reference code
//reduce : 합산할 데이터들을 모두 연산해서 결과를 리턴
          // 배열에서만 사용 가능함

          arr = [2,3,4,5];
          arr.reduce((cu, el) => {
            //cu: current - 누적된 값
            //el: element - 배열의 각각의 요소
            console.log(cu, el);
            return cu+el
          },0)
          //여기 들어간 요소부터 시작해서 누적이 되는거임
          sum;





//가운데 값 구하기
function solution(s) {
    // //홀수 못나눔
    let mid = s[s.length/2 -1]
    let mid2 = s[s.length/2]
 if (s.length%2===0){
     return (mid+mid2);
 }
 else if (s.length%2===1){
     return mid;
 }
}