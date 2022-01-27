import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
// import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

interface IProps {
    children: ReactChild
}

const LayoutSidebar = styled.div`
    width: 300px;
    height: 400px;
    background-color: grey;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const LayoutBody = styled.div`
    
`

const BodyWrapper = styled.div`
    display: flex;
`

// //Hiding Header in particular page
// const HIDDEN_HEADERS = [
//     "/12-06-modal-address-refactoring"
// ]

export default function Layout(props: IProps){
    const router = useRouter();
    console.log(router)

    // const isHiddenHeader =  HIDDEN_HEADERS.includes(router.asPath)
                                               //asPath: 현재 내가 접속한 페이지
    return(
        <div>
            {/* {isHiddenHeader && <LayoutHeader/>} */}
            {/* <LayoutHeader/> */}
            <LayoutFooter/>
            <LayoutBanner/>
            <LayoutNavigation/>
        <BodyWrapper>
            <LayoutSidebar>Side Bar Area</LayoutSidebar>
            <LayoutBody>{props.children}</LayoutBody>
        </BodyWrapper>
            <LayoutFooter/>
        </div>
    )

}