//returning s into type of number 
function solution(s) {
    let answer = Number(s)
    return answer;
}

//removing overlapping elements from the array
function solution(arr){
    const answer = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] !== arr[i-1]){
            answer.push(arr[i])
            
        }
        }
    return answer;
}

//or

function solution(arr){
    const answer = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] !==answer[answer.length-1]){
            answer.push(arr[i])
        }
    }
    return answer;
}


//password only last 4 digits available to see
function solution(phone_number) {
    let answer = '';
    for (let i =0; i<phone_number.length -4; i++){
        if (i < phone_number.length-4){
        }


//뒷 내지리를 이용한 "*"로 표시
function solution(phone_number) {
    let answer = '';
    answer = answer.padStart(phone_number.length -4, '*');
    answer += phone_number.slice(
    phone_number.length -4, phone_number.length)
    return answer;
}