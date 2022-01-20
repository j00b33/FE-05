//ref - 김서방 위치 찾기
function solution(seoul) {
    let x =0; //김서방의 위치값을 저장하는 변수
    for (let i=0; i<seoul.length; i++){
        console.log(i, seoul[i])
        if (seoul[i] ==="Kim"){
            x =i;
        }
    }
    return `김서방은 ${x}에 있다`;
}

//or
function solution(seoul) {
    let x =0; //김서방의 위치값을 저장하는 변수
    for (let i=0; i<seoul.length; i++){
        console.log(i, seoul[i])
        if (seoul[i] ==="Kim"){
            x =i;
            return `김서방은 ${x}에 있다`;
            break;
        }
    }
}

//or
function solution(seoul) {
    const x = seoul.indexOf("Kim");
    return `김서방은 ${x}에 있다`;
}








// 내코드 - 문자열이면 거르기 isNaN 사용함
function solution(s) {
    if (s.length === 4 || s.length === 6){
    for (let i= 0; i<s.length;i++){
        if (isNaN(s[i])){
            return false;
        }
        else {
            return true;
        }
    }
    }
}




// 내코드 - 약수의 총  합 구하기
function solution(n) {
    let answer = 0;
    for (let i=0; i<=n; i++){
        if (n%i===0){
            answer += i
        }
    }
    return answer;
}

//or
function solution(n) {
    let answer = n;
    for (let i=1; i<=n/2; i++){
        if (n%i===0){
            answer += i
        }
    }
    return answer;
}

//or with reduce()
function solution(n) {
    const answer = new Array(n) //해당 갯수에 맞는 배열 생성
                            .fill(1) //배열의 데이터마다 해당 인자 데이터를 할당
                            .reduce((cu, el, i)=>{
                                const num = el+i;
                                return n%num ===0 ? cu+num : cu
                            },0)       //n을 num의 값으로 나눴을때 0이 true라면 cu+num 아니라면 cu
    return answer;
}