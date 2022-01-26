//콜라츠 추측
function solution(num){
    let answer =0;
    
    //조건식이 true 일 때만 안쪽의 Logic executed
    while(num!==1){
        if (answer >= 500){
            return -1;
        }
        
        if(num %2 ===0){
            num = num/2;
        }
        else{
            num = (num * 3) +1
        }
        answer ++; 
    }
    return answer
}

//or in other way using for loop
function solution(num){
    let answer =0;
    
    //500번 안에 1이 나오면 함수를 종료
    for (let i=0; i<500; i++){
        if (num ===1){
            return answer;
        }
        if (num % 2 ===0){
            num = num/2 //even          
        } else {
            num = (num * 3) + 1 //odd
        }
    } 
    //500번 안에 1이 나오지 않아서 실행되는 logic
    return -1;
}

//or another way using forEach 
function solution(num){
    let answer =0;
    
    new Array(500)
            .fill(1)
            .forEach ( (el, i) => { //사용하지 않는 인자 처림 _
        if (num!== 1){
            answer ++
            
        num = num %2 ===0
            ? num /2  //even
            : (num * 3) + 1 //odd
    }
    })
    return num!==1 ? -1 : answer;
}


//누적값 이용
function solution(num){
    let answer =0;
    const result = new Array(500)
                            .fill (1)
                            .reduce((cu, el) =>{
                                if (cu !==1) {
                                    answer ++
                                    return cu % 2===0
                                    ? cu/2
                                    :(cu * 3) + 1
                                }else {
                                    return 1;
                                }
        
                            },num)
    return result !==1 ? -1 : answer
}