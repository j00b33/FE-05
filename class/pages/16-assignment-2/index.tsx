import {useRouter} from "next/router";
import { useEffect, useRef, useState} from "react";

export default function FunctionLifeCycleAssign () {
  const [count, setCount] = useState(0)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null);

//   componentDidMount() {
//     console.log("컴포넌트가 마운트됐습니다~");
//     this.inputRef.current?.focus();
//   }

//   componentDidUpdate() {
//     console.log("컴포넌트가 변경됐습니다~");
//   }

//   componentWillUnmount() {
//     alert("컴포넌트가 제거됩니다~");
//   }



  useEffect(() => { //componentDidMount와 동일함
      console.log("컴포넌트가 마운트됐습니다~")
      inputRef.current?.focus()

      return () => { //componentWillUnmount와 동일
          console.log("컴포넌트가 제거됩니다~")
      }
  },[])//의존성 배열 

  useEffect(() => { //componentDidUpdate와 비슷함 (쪼끔 다름)
      console.log("컴포넌트가 변경됐습니다~")
  }, [count]) //--> count가 변경됐을때만 실행됨



  const onClickCounter = () => {
    setCount((prev)=> prev + 1);
  };

	const onClickMove = () => {
		router.push("/")
	}

    return (
      <>
        <input type="password" ref={inputRef} />
        <div>카운트: {count}</div>
				<button onClick={onClickCounter}>카운트(+1)</button>
        <button onClick={onClickMove}>이동하기</button>
      </>
    );
  }
