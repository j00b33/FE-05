//두개 뽑아서 더하기
function solution(numbers) {
    const answer =[];
    
    for(let i=0;i<numbers.length; i++){
        for (let l = i+1; l<numbers.length; l++){
            const sum = (numbers[i]+numbers[l])
        if (answer.includes(sum) === false){
            answer.push(sum)
        }
    }
  }
    return answer.sort((a,b) => a-b)
}


//foreach
// function solution(numbers) {
//     const answer = new Set([])
    
//     numbers.forEach((num1 ,i) =>{
//         numbers.slice( i + 1 , numbers.length).forEach(num2 =>{
//             const sum = num1 + num2
//             answer.add(sum) // == answer.push(sum) 같은 개념 (데이터 넣기)
//         })
//     })
//     return Array.from(answer).sort((a,b)=> a-b )
//     }
// //(~˘▾˘)~