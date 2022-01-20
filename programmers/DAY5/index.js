//What I did: 
const myShopping = [
    { category: "과일", price: 12000 },
    { category: "의류", price:10000 },
    { category: "의류", price: 20000},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000 },
    { category: "의류", price: 7000 },
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000 } ]
 
let num=0;
let cost =0;
let level = "";
for (let i =0; i<myShopping.length; i++){
if (myShopping[i].category ==="의류"){
// 왜이러지
num = num+1
cost += myShopping[i].cost

if (num<3){
  level = "Bronze"}
else if (num<5){
  level = "Silver"}
else {
  level = "Gold"}
}
}
console.log("의류를 구매한 횟수는 총 " + num + "회 금액은 " + cost + "이며 등급은 " + level + "입니다.")
//result: '의류를 구매한 횟수는 총 5회 금액은 57000이며 등급은 Gold입니다.'










function grade(score) {
  if (score>100 || score<0){
    return "잘못된 점수입니다"
  }
  
  let answer="";
  if (score<=100 && score>=90){
    answer = "A"
  }
  else if (score <=89 && score>=80){
    answer="B"
  }
  else if (score <=79 && score>=70){
    answer="C"
  }
  else if (score <=69 && score>=60){
    answer= "D"
  }
  else if (score <=59){
    answer = "F"
  }
  return answer;
}
grade(105)
grade(-10)
grade(97)
grade(86)
grade(75)
grade(66)
grade(52)
//result: '잘못된 점수입니다'
          '잘못된 점수입니다'
          'A'
          'B'
          'C'
          'D'
          'F'









//Shorten way
function grade(score) {
  if (score>100 || score<0){
    return "잘못된 점수입니다"
  }
  
  let answer="";
  if (score>=90){
    answer = "A"
  }
  else if (score>=80){
    answer="B"
  }
  else if (score>=70){
    answer="C"
  }
  else if (score>=60){
    answer= "D"
  }
  else {
    answer = "F"
  }
  return answer;
}











//---------------------------Not this-------------------------------------
function random(){
    let token = String(Math.floor(Math.random()*10000)).padStart(4,"0") 
    console.log(token)
  }
  random();
  //result: 5014