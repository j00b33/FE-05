import {Rate} from 'antd'
import {useState} from "react"

export default function LibraryARatePage(){

    const [value, setValue] = useState(3)

    const handlechange = (value) =>{
        setValue(value)
    }

    return(
    <div>
        <Rate onChange={handlechange} value={value}/>
        <span>{value}점</span>
    </div>
    )
}