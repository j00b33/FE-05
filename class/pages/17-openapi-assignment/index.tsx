import {useEffect, useState} from "react"
import axios from 'axios'

export default function OpenApiPage () {

    const [name, setName]= useState("")
    
    useEffect(() => {
        const Name = async () => {
            const result =  await axios.get("https://random-names-api.herokuapp.com/random")
            setName(result.data.message)// promise가 뜨게 되는데 이건 비동기형식이라 언젠가 result 화면에 보여줄게 하고 말하는것
                                                //--> 이렇게 안에 함수를 만들어주고 그 안에 넣어줘야 async 사용 가능
        }
        Name()
    }, []) //빈 array는 한번만 실행하고 그 뒤로는 실행 안한다는것

    return (
        <div>
            <div>오픈 API 연습</div>
            <div>{name}</div>
        </div>
    )
}