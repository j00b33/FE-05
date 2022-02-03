import { ReactChild } from "react";
import LayoutHeader from "./header";
import LayoutBanner from "./banner"
import LayoutNavigation from "./navigation";
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

interface IProps {
    children: ReactChild
}

const BodyWrapper =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 150px;
`

const LayoutBody = styled.div`
`

export  default function Layout(props:IProps){
    const router = useRouter()
    console.log(router)

    return (
        <div>
            <LayoutHeader/>
            <LayoutBanner/>
            <LayoutNavigation/>
        <BodyWrapper>
            <LayoutBody>{props.children}</LayoutBody>
        </BodyWrapper>
        </div>
    )
}