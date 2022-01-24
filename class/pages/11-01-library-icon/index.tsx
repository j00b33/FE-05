import {ScissorOutlined} from '@ant-design/icons'
import styled from '@emotion/styled'

const MyIcon = styled(ScissorOutlined)`
    font-size: 50px;
    //width 나 height로 작동되는게 아님
    color: rgb(106, 168, 192);
`

export default function LibraryIconPage(){
    return <MyIcon/> 
}