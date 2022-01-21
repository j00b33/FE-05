import styled from '@emotion/styled'
import {IMyButtonProps} from './BoardWrite.type'


export const MyInput = styled.input``

export const MyButton = styled.button`
    background-color: ${(props: IMyButtonProps) => props.ggg === true ? "yellow" : "none"};
`

//props 라는 객체가 들어오는데 ggg가 반드시 있어야 하고 데이터 타입은 boolean타입이여야한다