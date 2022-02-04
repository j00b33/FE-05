//내적
function solution(a, b) {
    let answer = 0;
    
    for(let i = 0; i<a.length; i++){
        const sum = a[i] * b[i]
        answer += sum
    }
    return answer;
} //같은 배열은 동일한 인덱스로 접근할 수 있다


//using method
function solution(a, b) {
    const answer = a.reduce((acc, cur, i) => {
        console.log(acc, cur, b[i])
        return acc + (cur * b[i])
    },0)
    return answer
}

//제일 작은 수 제거하기
function solution(arr) {
    const answer = []
    
    let min = arr[0]
    for(let i=1;i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    for (let i=0;i<arr.length; i++){
        if(arr[i] !==min){
            answer.push(arr[i])
        }
    }
    return answer.length === 0 ? [-1] : answer
}

//other method
function solution(arr) {
    //1. 제일 작은 수 찾는 과정
    const min = Math.min(...arr)
    
    //2. 제일 작은 수를 제외한 나머지 값들을 새로운 배열에 저장
    const answer = arr.filter(num => {
        //배열 인자값 차례대로 찍어옴
        return num !== min
    })
        //빈 배열이라면 [-1] 데이터를 리턴
        //빈 배열이 아니라면 작은 수가 빠진 배열을 리턴
    return answer.length === 0 ? [-1] : answer;
}