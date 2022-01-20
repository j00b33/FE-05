import {useState} from 'react'
//react 에서 제공해주는 useState를 불러와서 사용한다고 선언해주는 기능

export default function StateSignup(){

    const[email, setEmail] = useState("")
    // setEmail= 이메일을 변경하는 함수
    //초기값 빈 문자열
    const[password, setPassword] = useState("")


    const [emailError, setEmailError] = useState("에러메시지가 없습니다")
    // cosnt [mypwError, setMypwError] = useState("에러메시지가 없습니다")

    function aaa(event){
        //event: on으로 시작하는 함수 해당하는 정보들을 event라는거에 담아줌
        //event-handler 함수: {aaa} line 15 aaa
        console.log(event.target.value)
        //target tag를 가지고 오게 됨. 어떤 타깃이 변경이 됐는지
        //input tag가 가지고 있는 value 값이 찍히게 돼서 저장이 되는 방식
        setEmail(event.target.value)
        //이건 이메일 state에 저장이 되는것
    }

    function bbb(event){
        setPassword(event.target.value) 
        //타깃의 value를 저장
    }

    function ccc(){
        //check whether the function is correctly responding
        console.log("email: " + email)
        console.log("password: " + password)

        if (email.includes("@") ===false){
            // alert("이메일에 @가 없습니다. 잘못된 이메일이네요")
            setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요") }
        
        else {
            alert("회원가입을 축하합니다")
        }

        // if (password>8){
        //     setmyPwError("에러메시지가 있습니다")
        // }
    }

    


    return (
        <div>
            이메일: <input type="text" onChange={aaa}/> <br/> 
            <span>{emailError}</span> <br/><br/>
            비밀번호: <input type="password" onChange={bbb}/> <br/>
            {/* <span>{mypwError}</span> <br/><br/> */}
            <button onClick={ccc}>회원가입</button>
        </div>
    )
}

//Teacher's Note :
    //event.target => <input type="text"/>태그 전체를 가져옴
    //console.log(event.target.value) -> 해당 택의 값을 가져옴

// onChange(contains onInput function so use similarly) != onchange(html)