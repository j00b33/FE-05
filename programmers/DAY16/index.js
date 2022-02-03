//음양 더하기
function solution(absolutes, signs) {
    let answer = 0
    for (let i =0; i<absolutes.length; i++){
        if (signs[i]===true){
            answer += absolutes[i]
        }
        else {
            answer -= absolutes[i]
        }
    }
    return answer
}

//other way
function solution(absolutes, signs) {
    let answer = 0
    for (let i =0; i<absolutes.length; i++){
        answer += signs[i] ? absolutes[i]: -absolutes[i]
    }
    return answer
}

//other way using method
function solution(absolutes, signs) {
    const answer = absolutes.reduce((acc, cur, i) => {
                                    //누적값과 현재 데이터
        //true일땐 더해주고
        //false일땐 빼준다
        return signs[i] ? acc+cur : acc - cur
    },0)
    return answer 
}

//하샤드 수
function solution(x) {
    x = String(x)
    let answer =0
    
    for (let i = 0; i< x.length; i++){
        answer += Number(x[i])
    }
    return x % answer ===0
}

//using method
function solution(x) {
    const answer = x.toString()
                    .split("")
                    .reduce((acc, cur) => {
                        return Number(acc) + Number (cur)
                    })
    return x % answer === 0
}