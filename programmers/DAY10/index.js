//문자열 내림차순 배치
function solution(s) {
    const answer = [];
    for (let i=0;i<s.length; i++){
        answer.push(s[i])
    }
    
    answer.sort((a,b) => {
        return a > b ? -1 : 1 //내림차순 (9-0)
    })
    
    let result =""
    for (let i= 0; i<answer.length; i++){
        result +=answer[i]
    }
    return result;
}


//another way
function solutions(s) {
    const answer = s.split("")
                    .sort ((a,b) => {
                      return a > b ? -1 : 1
                    }).join("")
    return answer;
  }




//--------------------------------------------------------------------------
//sort 메소드 사용
//sort는 원본을 변경하기에 다른 변수에 넣어서 코딩할 필요가 없음
//1. 문자 또는 숫자를 오름차순 및 내림차순 순으로 정렬
//2. 배열에서 사용되는 메소드

//A: 오름차순 정리하고싶어용
arr = [1,3,9,12,102,86]
arr.sort()
//sort는 기본형이 오름차순
//숫자에서 오름차순을 사용할때 기본형으로 사용하게 되면 맨 앞에 있는 숫자로만 비교를 해서 오름차순으로 됨
//그래서 102여도 맨 앞이 1이기떄문에 3보다 작게 정렬이 되고 있는거임

//올바른 오름차순 형태의 정렬: 
arr = [1,3,9,12,102,86]
arr.sort((a,b)=> {
  return a - b //오름차순 형태로 정렬
})
arr

//올바른 내림차순 형태의 정렬: 
arr = [1,3,9,12,102,86]
arr.sort((a,b)=> {
  return b - a //내림차순 형태로 정렬 (9-0)
})
arr


arr = ['a','b','Z','A','f','z']
'a' < 'b'
'z' >'f'
'z' > 'w'
'f' > 'w'
//UNICODE가 지정해준 순서도에 따라서 각각의 코드번호를 가지게 됨
//그래서 각각의 코드번호를 비교하게 되는것


'A' < 'a'
//대문자는 항상 소문자보다 더 작은 값을 가지게 됨


arr = ['a','b','Z','A','f','z']
arr.sort((a,b)=>{
//   return a > b ? -1 : 1 // 내림차순 변경
  return a < b ? -1 : 1 //오름차순
})
arr
//--> result: [ 'A', 'Z', 'a', 'b', 'f', 'z' ]



return a>b ? -1 : 1
// --> 문자열 방식이랑 숫자 모두 사용 가능함

return a - b
//--> 문자열은 이 방법 사용 불가능
//--------------------------------------------------------------------------

//K-번쨰 수
function solution(array, commands) {
    const answer = [];
    
    for (let idx = 0; idx < commands.length; idx++){
        const i= commands [idx][0];
        const j = commands [idx]][1];
        const k = commands[idx][2];
        
        const result = array.slice(i-1, j);
                            .sort( (a,b) => {
                                return a < b ? -1 : 1
                            })
        answer.push(result[k-1]);
    }
    return answer;
}


//map 사용해서 풀기
function solution(array, commands) {
    const answer = commands.map(nums=>{
        const result = array.slice(nums[0]-1, nums[1])
                            .sort((a,b) =>{
                                return a<b ? -1 : 1
                            })
        return result[nums[2]-1]
    })
    return answer;
}