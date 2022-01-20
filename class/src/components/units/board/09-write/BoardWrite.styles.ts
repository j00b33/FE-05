import styled from '@emotion/styled'

export const MyInput = styled.input``

//interface 위치 어디던 상관없음
interface IProps{
    ggg:boolean
}

export const MyButton = styled.button`
    background-color: ${(props: IProps) => props.ggg === true ? "yellow" : "none"};
`
//props 라는 객체가 들어오는데 ggg가 반드시 있어야 하고 데이터 타입은 boolean타입이여야한다 이말
