import {useState} from 'react'

export default function LetCount(){

    const[count, setCount]= useState(0)
    //여기서 const는 그냥 공식이라고 생각하기
    //setcount = state 바꾸는 함수
    //0=초기값

    function zzz(){
        setCount(count + 1)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={zzz}>카운트 증가</button>
        </div>
    )    
    }