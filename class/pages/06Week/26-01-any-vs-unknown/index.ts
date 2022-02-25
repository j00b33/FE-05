//1. anyType
export const getAny = (args: any) => {
  const answer = args + 2; //result => 철수2
  return answer;
};

const myResult1 = getAny("철수");
console.log(myResult1);
//any로 하면 자바스크립트랑 다를게 없음

// ============================================

//2. unknown type
const getUnknown = (args: unknown) => {
  //args가 뭔지 모른다고 할떄
  if (typeof args === "number") {
    const answer = args + 2;
  } else {
    return "숫자를 넣어주세요";
  }

  const answer = args + 2;
  return answer;
};

const myResult2 = getUnknown("철수"); // --> n+2가 나오거나 "숫자를 넣어주세요" 가 나오던가
console.log(myResult2);

//Both any and unknown 자바스크립트랑 같음 그냥

//any 뭘 넣어도 상관없음
//근데 unknown도 뭘 넣어도 상관없지만 개발자에게 안전의 주의를 주는거임
// -> 뭔진 모르지만 타입을 모르니까 안전하게 코딩을 해달라 하는거
//타입을 나누던지 뭐 안전하게 코딩을 해달라고 주의를 주는거임

//Mento's note: unknown type: 개발자에게 안전하게 코딩하도록 유도
//가급적 any보단 unknown을 쓰는게 나음
