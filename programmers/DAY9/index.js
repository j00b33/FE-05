//Algorithms

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let answer =[];
    for(let i =0; i<n; i++){
        x = x+x
        answer[i] = x
    }
    return answer;
}

//or
function solution (x,n){
    const answer = new Array(n)
                      .fill(1)
                      .map ((num, i) => {
                        const sum = num + i;
                        return x * sum
                      })
  }




//adding values by getting index
function solution(n){
    let answer =0;
    n=String(n);
    
    for (let i=0; i<n.length; i++){
        answer += Number(n[i])
        //일단 string 으로 변환 후에 number 값으로 변환해줘야함
    }
    return answer;
}


//or
function solution(n){
    const answer = string(n)
                            .split (" ")
                            .reduce ((cu, el) => {
                                return Number(cu) + Nmber(el)
                            },0
}