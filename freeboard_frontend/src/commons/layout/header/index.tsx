import styled from '@emotion/styled'
import Router from 'next/router'
import { Tooltip } from 'antd';
import {RiUser5Line, RiSettings2Line} from 'react-icons/ri'
import {GiSafetyPin} from 'react-icons/gi'

const Wrapper = styled.div`
    height: 120px;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    font-size: 80px;
    color: #b81a39;
    font-family: Cochin;
    padding-left: 170px;
    font-weight: 900;

    width: 700px;
    cursor: pointer;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    position: absolute;
    right: 200px;
    top: 68px;

    width: 110px;
`

const Profile = styled(RiUser5Line)`
    color: black;
    width: 25px;
    height: 25px;

    cursor: pointer;
    :hover {
        color: #b81a39;
    }
`
const Shopping = styled(GiSafetyPin)`
    color: black;
    width: 25px;
    height: 25px;

    cursor: pointer;
    :hover {
        color: #b81a39;
    }
`
const  Settings = styled(RiSettings2Line)`
    color: black;
    width: 25px;
    height: 25px;

    cursor: pointer;
    :hover {
        color: #b81a39;
    }
`



const onClickTitle = () => {
    Router.push(`/01-01-board/list`)
}

export default function LayoutHeader(){
    return(
        <Wrapper>
            <Title onClick={onClickTitle}>Pierce Peers</Title>
            <HeaderWrapper>
            <Tooltip title="My Page">
                <Profile><RiUser5Line/></Profile>
            </Tooltip>

            <Tooltip title="Cart">
                <Shopping><GiSafetyPin/></Shopping>
            </Tooltip>

            <Tooltip title="Settings">
                <Settings><RiSettings2Line/></Settings>
            </Tooltip>
            </HeaderWrapper>
        </Wrapper>
    )
} 