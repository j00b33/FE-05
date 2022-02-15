//포켓몬 절반 떼어가기
function solution(nums) {
  const answer = [];
  const limit = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    //중복이 되지 않으면서 n/2를 넘지 않을때만 push 해주는거임
    if (answer.includes(nums[i]) === false && answer.length !== limit) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

//other ways using new Set([]) -- size instead of length
function solution(nums) {
  const answer = new Set([]);

  //중복은 제거하고 각각 하나씩만 저장하기
  for (let i = 0; i < nums.length; i++) {
    //최대 내가 몇마리까지 가져갈 수 있는지를 알려줘야함
    //new Set method에서는 length 대신 size를 사용함
    if (nums.length / 2 !== answer.size) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

//new Set + forEach method
function solution(nums) {
  const answer = new Set([]);

  //element = monster
  nums.forEach((monster) => {
    if (nums.length / 2 > answer.size) {
      answer.add(monster);
    }
  });
  return answer.size;
}
