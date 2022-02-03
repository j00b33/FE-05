import styled from '@emotion/styled'
import Router from 'next/router'

const Wrapper = styled.div`
    height: 60px;
    background-color: #b81a39;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: black;
    font-size: 20px;
`

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 600px;
`
const Inner = styled.div`
    cursor: pointer;
    font-family: Cochin;
    :hover{
        color: white;
    }
`
const onClickBoard = () =>{
    Router.push(`/01-01-board/new`)
}

const onClickList = () => {
    Router.push(`/01-01-board/list`)
}

export default function LayoutNavigation(){
    return(
        <Wrapper>
            <InnerWrapper>
                <Inner onClick={onClickBoard}>Freeboard</Inner>
                {"  /  "}
                <Inner>Market</Inner>
                {"  /  "}
                <Inner onClick={onClickList}>List</Inner>
            </InnerWrapper>
        </Wrapper>

    )
}