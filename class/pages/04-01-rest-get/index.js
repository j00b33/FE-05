import axios from 'axios'
import {useState} from 'react'

export default function RestGet(){

    const [aaa, setAaa] = useState("")

    //화살표 함수 괄호 앞에 async 달아줌 (조금은 느릴 수 있음)
     const zzz = async() => {
        // zzz 는 event handler 함수
        const result = await axios.get('http://koreanjson.com/posts/1')
        console.log(result.data.title)
        setAaa(result.data.title)
        //aaa가 result에 나온 문장으로 바꿔치기가 됨 (정당의 --)
        console.log(result)
    }



    // zzz() 
    //async system 위로 가게 되면 실행되지 않음 어디에 있던 상관없이 hoisting 돼서 위로 올라감
    //같은 이름이 있을땐 위에것이 아래것을 덮어씌우기 때문에 예상치 못한 에러가 발생할 수 있음
    //--> 이를 막기 위해 화살표 함수

    function zzz(){
        console.log("asdfasdfasdf")
    }



    return(
        <>
            <button onClick={zzz}>REST-API 요청하기</button>
            <div>{aaa}</div>
        </>
        // <Fragment></Fragment> 그냥 단지 하나로 묶어주는 역할 만 있음 div/span 같은거 
        //근데 그냥 <></>으로 사용해도 무관함. 두개 다 같은 개념. 아예 똑같은건 아님
        )
}