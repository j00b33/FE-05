import * as L from './landingstyles'

export default function LandingUIPage(props){
    return (
        <L.Wrapper>
            <L.TopBox>
                <L.TopBoxLetter>Pierce Peers</L.TopBoxLetter>
            </L.TopBox>
            <L.TopLine/>
            <L.TopLine/>


        <L.MainWrapper>
            <L.MainSubWrapper>
                <L.MainTitleOne>We Are</L.MainTitleOne>
                <L.Space>{" "}</L.Space>
                <L.MainTitleTwo> Pierce Peers</L.MainTitleTwo>
            </L.MainSubWrapper>
            
            <L.Description>We Service for All the Peirce Peers</L.Description>
        </L.MainWrapper>


        <L.ColumnWrapper>
        <L.ColumnOne>
            <L.SubWrapper>
                <L.MainPic src="/landingpage/picone.png"/>
                <L.MainPicDes>{"Find your favorite piercings in Pierce Peers"} </L.MainPicDes>
            </L.SubWrapper>

            <L.SubWrapper>
                <L.MainPic src="/landingpage/shopone.png"/>
                <L.MainPicDes>{"You can find some amazing piercing shops"} </L.MainPicDes>
            </L.SubWrapper>

            <L.SubWrapper>
                <L.MainPic src="/landingpage/pictwo.png"/>
                <L.MainPicDes>{"What about your own unique piercings?"} </L.MainPicDes>
            </L.SubWrapper>
        </L.ColumnOne>

        <L.Columntwo>
            <L.SubWrapper>
                <L.MainPic src="/landingpage/hand.png"/>
                <L.MainPicDes>{"You can communicate with others to get information"} </L.MainPicDes>
            </L.SubWrapper>

            <L.SubWrapper>
                <L.MainPic src="/landingpage/epic.png"/>
                <L.MainPicDes>{"There are diverse types of piercings"} </L.MainPicDes>
            </L.SubWrapper>
        </L.Columntwo>
        </L.ColumnWrapper>

        <L.Footer>
            <L.HomeButton onClick={props.onClickHome}>Explore</L.HomeButton>
        </L.Footer>



        </L.Wrapper>
    )
}