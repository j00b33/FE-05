import { useRouter } from 'next/router'
import {useEffect, useRef, useState} from 'react'

export default function FunctionLifeCycleRefPage () {
    const inputRef = useRef<HTMLInputElement>(null)

    const router = useRouter()

    const [count, setCount] = useState(0)

    // componentDidMount(){
    //     console.log("마운트 됨")
    //     this.inputRef.current?.focus()
    // }

    // componentDidUpdate(){
    //     console.log("수정되고 다시 그려짐")
    // }

    // componentWillUnmount(){
    //     console.log("여기서 나갈래옹")
    // }

    useEffect(()=>{
        //copmonentDidMount와 동일
        //뒤에 "배열"을 붙여줄 수 있음
        console.log("마운트 됨")
        //한번만 실행됨
        inputRef.current?.focus()
        //해당하는 태그를 찾을 수 있고 그 태그에 포커스를 맞추는것

       

        return () => {
            //이 부분은 componentWillunmount와 동일
            console.log("여기서 나갈래옹")
        }
    }, []) //의존성 배열 (dependency array)

    useEffect(() => {
        //componentDidUpdate와 비슷 (99%같고 1% 다름)
            //--> refresh 해도 최초 한번은 실행이 됨
        //뭐 하나라도 바뀌면 실행
        console.log("수정되고 다시 그려짐")

         // setCount((prev) => prev + 1)
         // 무한루프 빠짐 DAY16 강의 3시간차 확인

    },[count]) //--> count가 바뀌었을때만 실행됨 ()



    const onClickCounter = () => {
        console.log(count)
        console.log("카운터를 클릭하셨습니다")
        setCount((prev) =>(prev + 1))
    }

    const onClickMove =() => {
        //use형 함수는 class형 component에서 사용 불가능함 (hook이라서)
        router.push("/")
    }



    console.log("이 콘솔은 언제 실행이 될까옹")
    //componentDidMount


        //그림그리는 함수
        return (
            //이 안에 html입력해주면 됨. 반드시 render안에 return이 들어가야함
            <div>
                <input type="text" ref={inputRef}/>
                <div>현재 카운트: {count}</div>
                <button onClick={onClickCounter}>카운트 올리기</button>
                <button onClick={onClickMove}>나가기</button>
            </div>
        )
}