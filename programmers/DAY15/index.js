//정수 제곱근 판별
function solution(a, b) {
    var answer = 0;
    
    //예외처리를 먼저 해줘야함 (a와 b가 서로 같을때)
    if (a ===b){
        return a; //or b
    }
    else {
        //반복문이 실행될 떄 설정되는 초기값 (a 와 b 중에 작은 수가 들어옴)
        //const start - a > b ? b : a
        const start = Math.min(a,b)
        //반복문이 종료되는 조건을 설정 (a 와 b 중에 큰 값이 들어옴)
        // const end = a > b ? a : b
        const end = Math.max(a , b)
        //해당 인자값을 쉼표로 구분해서 넣어주고 그 중 더 큰 값을 골라내서 end에 담아주는 함수
        
        for (let i = start; i <= end; i++){
            answer += i
        }
    }
    return answer;
}




//두 정수 사이의 합
function solution(n) {
    //제곱근
    //제곱의 기준이 되는 수(같은 수를 두번 곱할 떄 나오는 제곱값)
    let answer = -1;
    
    for (let i =1; i<=n; i++){
    //121이라면 그 값을 포함한 값까지 i가 돈다는 것
        if (i * i  === n ){
            //제곱근을 찾은 경우
            answer = i + 1;
            return answer * answer
        }
        
    }
    
    return answer;
}


//method 사용
function solution(n){
    let answer =1;
    while(answer * answer < n){
        answer ++;
    }
    return answer * answer ===n
    ? (answer +1) * (answer +1) 
    : -1  
}


//other way
function solution(n){
    let answer = Math.sqrt(n);
    if (Number.isInteger(answer)===true){
        answer ++;
        return answer * answer
    }
    else {
        return -1;
    }
}


//위에꺼 좀 변형하면
function solution(n){
    let answer = Math.sqrt(n);
    if (Number.isInteger(answer)===true){
        //true라면 정수가 맞다 (제곱근이 맞다)
        answer ++;
        //return answer ** 2;
        return Math.pow(answer, 2)
        
    }
    else {
        //false 라면 정수가 아니다 (제곱근이 아니다)
        return -1;
    }
}




//제곱 할떄 3제곱 10제곱 이런식으로 가면 코드를 계속 붙여주는게 아니라 "거듭제곱 연산자"를 사용함
// answer ** 2  === 2 제곱
// answer ** 5 === 5제곱