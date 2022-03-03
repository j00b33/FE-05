//기존에 사용하던 slice
// arr = [1,2,3,4]
// arr.slice(1,3)

// str = "abcd"
// str.slice(1,3)

// ==============================

//substr
//1. 문자열을 자르는데 사용
//2. 첫번째 인자에 들어온 인덱스부터 자른다
//3. 두번째 인자로 들어온 갯수만큼 자른다

// let str = "abcd"
// str.substr(1) //첫번째 인덱스부터 끝까지 잘라줌
// str.substr(1,2) //자기 자신을 포한해서 총 두개의 문자열을 잘라오게 되는거임

// ==============================

//substring

//1. 문자열을 자르는데 사용
//2. 첫번째 인자에 들어온 인덱스부터 자른다
//3. 두번째 인자로 들어온 인덱스를 제외한 앞에까지만 자른다

// let str = "abcd"
// str.substring(1,4)

//신규 아이디 추천
const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  //1단계: 대문자 -> 소ㄴ자로 치환
  new_id = new_id.toLowerCase();

  //2단계: 소문자, 숫자, 빼기, 밑줄, 마침ㅍ를 제외한 모든 문자를 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }

  //3단계: 마침표가 연속적으로 들어오면 하나의 마침표로 치환 (.. => .)
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  //4단계: 마침표가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer = answer.substring(1);
  }

  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }
  removeLastDot();

  //5단계: 빈 문자열이라면, "a" 대입
  if (answer === "") {
    answer = "a";
  }

  //6단계: 문자열의 길이가 16자 이상이면 15자까지 줄인다
  //      제거한 후에, 끝에 마침표가 있다면 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    removeLastDot();
  }

  //7단계: 문자열의 길이가 2 이하라면,
  //      마지막 글자로 문자열 길이가 3의 될 때까지 반복해서 추가
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}
