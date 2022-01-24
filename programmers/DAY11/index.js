//문자열 내 p와 y의 개수
function solution(s){
    var answer = true;
    let pp = 0;
    let yy = 0;
    for (let i=0;i<s.length;i++){
        if (s[i]==="p" || s[i]==="P"){
            pp += 1
        }
        else if (s[i]==="y" || s[i]==="Y"){
            yy +=1
        } 
    }
    if (pp===yy){
        return true;
    } 
    else {
        return false;
}
}

//이상한 문자 만들기
function solution(s) {
    let answer = "";
    
    let idx =0;
    for (let i=0; i<s.length;i++){
        if (s[i]===" ") {
            answer += " ";
            idx =0;
        }
        else {
            answer += idx%2===0
            //짝수 인뎃그라면 대문자로 추가
            ? s[i].toUpperCase()
            //홀수 인덱스라면 소문자로 추가
            : s[i].toLowerCase()
        idx++;
        }
    }
    return answer
}

