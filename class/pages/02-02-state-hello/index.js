import {useState} from 'react'

export default function StateHello(){

    const [qqq, setQqq] = useState("안녕하세요")
    //const is different from what we used to know. 
    //10 was 초기값, now 안녕하세요 is the 초기값 in stateHello function

    function zzz(){         
        setQqq("반갑습니다")
    }

    return (
        <div>  
            <div>{qqq}</div>  
            <button onClick={zzz}>클릭</button> 
        </div>
    )
}



//qqq는 변수/함수이기에 중괄호 안에 넣어준다 중괄호 안 문자는 변수/함수가 됨
//클릭은 중괄호 안에 없기에 문자열

// state변수 만들어지고 안녕하세요 들어가있음
// 함수가 하나 만들어지고 qqq 안에 안녕하세요가 들어감
// 버튼 클릭 후 zzz함수 실행
// --> qqq부분이 반갑습니다 로 바뀜
// 화면이랑 변수랑 같이 움직인다(연결되어있다)

// 본래 어디에 어디있는걸 어디에 직접 꺼내오고 가져와줘
// 지금은 변수를 가져오면 변수가 바뀜

// * 특정 변수가 바뀌면 화면도 같이 바뀐다는것