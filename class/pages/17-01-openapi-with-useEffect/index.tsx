import {useEffect, useState} from "react"
import axios from 'axios'

export default function OpenApiPage () {

    const [dogUrl, setDogUrl]= useState("")
    
    useEffect(() => {
        const fetchDog = async () => {
            const result =  await axios.get("https://dog.ceo/api/breeds/image/random")
            //API 사이트 자체를 해줘야함 거기서 message, status 골라서 받아오는것
            setDogUrl(result.data.message)// promise가 뜨게 되는데 이건 비동기형식이라 언젠가 result 화면에 보여줄게 하고 말하는것
                                                //--> 이렇게 안에 함수를 만들어주고 그 안에 넣어줘야 async 사용 가능
        }
        fetchDog()
    }, []) //빈 array는 한번만 실행하고 그 뒤로는 실행 안한다는것

    return (
        <div>
            <div>오픈 API 연습</div>
            <img src={dogUrl} width="50%" height="50%"/>
        </div>
    )
}