//시저 암호
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]; //공백
      continue;
    }

    let index = alphabet.indexOf(s[i]);
    const word =
      index > 25
        ? alphabet.slice(26, alphabet.length) //대문자
        : alphabet.slice(0, 26); //소문자

    index = word.indexOf(s[i]) + n;

    if (word[index] === undefined) {
      //마지막 알파벳을 남긴 순간 -> 처음으로 되돌아간다
      index -= 26;
    }

    answer += word[index];
  }
  return answer;
}

//other way
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " "; //=s[i]
      continue;
    }
    //s[i]가 소문자라면, 소문자 문자열을 저장하고 아니라면 대문자 문자열 저장
    const word = lower.includes(s[i]) ? lower : upper;
    let index = word.indexOf(s[i]) + n;

    if (index >= 26) {
      index -= 26;
    }
    answer += word[index];
  }
  return answer;
}

//another way using method
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    if (cur === " ") {
      return acc + " ";
    }

    const word = lower.includes(cur) ? lower : upper;
    let index = word.indexOf(cur) + n;
    if (index >= 26) {
      index -= 26;
    }
    return acc + word[index];
  }, "");
  return answer;
}

//ASCII CODE
//아스키코드 : 어떠한 문자를 해당되는 숫자 데이터로 변환

str = "z";
str.charCodeAt(); // => 122         //유니코드 받아올 때 charCodeAt()
//소문자는 아스키 코드로 변환했을때 97 ~ 122 까지 받아올 수 있음

str = "A";
str.charCodeAt(); // => 65
//대문자는 아스키 코드로 변환했을때 65 ~ 90 까지 받아올 수 있음

String.fromCharCode(90); //=> 'Z'
//아스키에서 문자열로 받아올 때 fromCharCode()사용

//using ASCII CODE
function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      //소문자 z (122)를 넘어가거나
      //대문자 Z (90)를 넘어가면서
      //기존에 대문자이면서, 소문자 a (97)를 넘지 않을때
      index -= 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}
