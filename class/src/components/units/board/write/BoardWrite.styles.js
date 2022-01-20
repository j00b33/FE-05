import styled from '@emotion/styled'

export const MyInput = styled.input``

export const MyButton = styled.button`
    background-color: ${(props) => props.ggg === true ? "yellow" : "none"};
                                                //true라면 노란색으로, 아니라면 색을 없애줘
`