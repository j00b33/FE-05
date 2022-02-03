import {Rate} from 'antd'
import {useState} from "react"

export default function LibraryRatePage(){

    const [value, setValue] = useState(3)

    const handlechange = (value) =>{
        setValue(value)
    }

    return <Rate onChange={handlechange} value={value}/> 
}