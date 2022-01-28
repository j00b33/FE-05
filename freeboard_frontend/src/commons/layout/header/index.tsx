import styled from '@emotion/styled'
import Router from 'next/router'

const Wrapper = styled.div`
    height: 130px;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    font-size: 80px;
    color: #264765;
    font-family: Impact;
    padding-left: 200px;

    width: 500px;

    cursor: pointer;
`

const SignWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 200px;
`

const Sign = styled.div`
    cursor: pointer;
    color: #525252;
    padding-top: 50px;
    font-size: 15px;
    

    :hover{
        color: #5E81A1;
    }
`

const Blank = styled.div`
    width: 20px;
`





const onClickTitle = () => {
    Router.push(`/01-01-board/list`)
}

export default function LayoutHeader(){
    return(
        <Wrapper>
            <Title onClick={onClickTitle}>Freeboard</Title>
            <SignWrapper>
                <Sign>Sign In</Sign>
                <Blank></Blank>
                <Sign>Sign Up</Sign>
            </SignWrapper>
        </Wrapper>
    )
}