import styled from '@emotion/styled'
import Router from 'next/router'

const Wrapper = styled.div`
    height: 60px;
    background-color: #264765;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
`

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 700px;
`
const Inner = styled.div`
    cursor: pointer;
    :hover{
        color: #AABAC9;
    }
`
const onClickInner = () =>{
    Router.push(`/01-01-board/new`)
}

export default function LayoutNavigation(){
    return(
        <Wrapper>
            <InnerWrapper>
                <Inner onClick={onClickInner}>Freeboard</Inner>
                {"  /  "}
                <Inner>Flea Market</Inner>
                {"  /  "}
                <Inner>My Page</Inner>
            </InnerWrapper>
        </Wrapper>

    )
}