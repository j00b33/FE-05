for (let i=0; i<5;i++){
  if (i===3){
    break;
  }
  console.log(i)
}
// 012 3이 됐을떄 멈춤


for (let i=0; i<5;i++){
  if (i===3){
    continue;
  }
  console.log(i)
}
//0124 3이 됐을땐 멈췄다가 다음 구간에서 다시 시작
//해당 i 값이 됐을떄 잠시 멈춤


//---------------------------

function sum(num) {
  let count =0;
  for(let i=0; i<=num ; i++){
    count=count+i
  }
  return count;
//return false; //반복문이 돌다가 반복분이 끝나고 return 도 끝나면서 false를 뱉게 됨
}
sum(5)
// 15
// Correct






const obj = {
  name: "JB",
  age: 12,
  school: "CodeCamp"
}
for (let key in obj) {
  console.log(key, obj[key])
} 
//result: 'name' 'JB'
//        '  age' 12
//        'school' 'CodeCamp'





const str = "abcde"
for (let key in str){
  console.log(key, str[key])
}
// '0' 'a'
// '1' 'b'
// '2' 'c'
// '3' 'd'
// '4' 'e'



const str = "what"
for (let key of str){
  console.log(key)
}
//result: "w","h","a","t"
// for of가 제일 느리고 효율성이 많이 떨어짐
// 시간이 많이 걸림






function countLetter(letter){
  let count =0;
  for (let i=0; i<letter.length; i++){
    if (letter[i]==="a" || letter[i] ==="A"){
      count ++
}
}
return count;
}
// countLetter("aaabbbccc")
// 3




//or just makig every string into lowercase letters
function countLetter(str){
  str = str.toLowerCase();
  let count =0;
  for (let i=0; i<letter.length; i++){
    if (str[i]==="a" ){
      count ++
    }
}
return count;
}




//reference code -%%
function makeNumber(num) {
  let answer = "";
  for (let i=1; i<=num; i++){
    answer +=i;
    //i가 5와 동일할떄 끝남
    if (i!==num) {
      answer += "-"
    } //num 이 i 와 동일하지 않을때 hyphen 붙어주기

  }
  return answer;
}
makeNumber(3)





//What I did - %%
function makeNumber(num){
  let result = ""
  for (let i = 1; i<=num; i++){
    result= (i+"-")+result;
  }
  return result;
}
makeNumber(5)
//Prob: result printed in a reverse way




function makeOdd(num){
    let odd = "";
    for (let i= 1; i<=num; i++){
      if (i%2 !== 0){
        odd = odd+i;
      }
    }
    return odd;
  }
  makeOdd(7)



//reference code:
function makeOdd (num) {
  answer = ";"
   for (let i=1; i<= num; i++){
     if (i%2 ===1){
       //2로 나눴을떄 1이 남는건 홀수
       answer += i; 
     }
   }
   return answer;
}
makeOdd(5)



function bigNum (str) {
  let biggest =0;

  for (let i =0; i<str.length; i++)  {
    if (Number(str[i])> biggest){
      biggest = Number(str[i])
    }
  }
  return biggest;
}

bigNum("12345")
bigNum("3247889")




///////////////REFERENCE CODES///////////////
function countLetter(letter){
  let count =0;
  letter = letter.toLowerCase()
//this function makes all the strings of letter into lowercase so that the computer can recognize all the lowercase letters and figure out what is lowercase "a".
  for (let i=0; i<letter.length; i++){
    if (letter[i]==="a"){
      count ++
}
}
return count;
}
countLetter("aaabbbccc")
//result: 3




function makeNumber(num) {
  let answer = "";
  for (let i=1; i<=num; i++){
    answer +=i;
    //i가 5와 동일할떄 끝남
    if (i!==num) {
      answer += "-"
    }

  }
  return answer;
}

makeNumber(3)
//result: 1-2-3



//my code {//
function makeNumber(num){
  let result = ""
  for (let i = 1; i<num+1; i++){
    result= (i+"-")+result;
  }
  return result;
}
makeNumber(5) 
//rsult: 5-4-3-2-1-'
//}



function makeOdd(num){
  let odd = ""
  for (let i= 1; i<num+1; i++){
    if (i%2 !== 0){
      odd = odd+i;
    }
  }
  return odd;
}
makeOdd(7)
//result: 1357


let current =1; //로봇 현재 위치
let answer =0; //이동횟수

//조건식이 true일떄만 조건식이 부합함
while (current !== 100){
  //오른쪽 옆에 동글뱅이는 무한 반복중인것
  current++;
  answer ++;
}
result: 98