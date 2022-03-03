import { GiFizzingFlask } from "react-icons/gi";
import * as L from "./landingstyles";

export default function LandingUIPage(props) {
  return (
    <L.Wrapper>
      <L.TopBox>
        <L.TopBoxLetter>GO MAD</L.TopBoxLetter>
        <L.LandingNavigation>
          <L.Navigation onClick={props.onClickCommunity}>
            Community
          </L.Navigation>
          <L.Navigation onClick={props.onClickMarket}>Market</L.Navigation>
          <L.Navigation onClick={props.onClickMyPage}>My Page</L.Navigation>
          <L.Navigation>Help</L.Navigation>
        </L.LandingNavigation>
      </L.TopBox>

      <L.TopLine />
      <L.TopLine2 />

      <L.MainWrapper>
        <L.MainTitle>
          <GiFizzingFlask />
          Music of the Month
        </L.MainTitle>
      </L.MainWrapper>

      <L.ColumnWrapper>
        <L.RowOne>
          <L.SubWrapper>
            <L.MainPic src="/music-landing/beautiful.png" />
            <L.DescriptionWrapper>
              <L.MainPicDes>{"Beautiful"} </L.MainPicDes>
              <L.MainPicSinger>{"MOTi, JETFIRE, Lovespeake"}</L.MainPicSinger>
            </L.DescriptionWrapper>
          </L.SubWrapper>

          <L.SubWrapper>
            <L.MainPic src="/music-landing/memories.png" />
            <L.DescriptionWrapper>
              <L.MainPicDes>{"Memories got no power"} </L.MainPicDes>
              <L.MainPicSinger>{"SINCE"}</L.MainPicSinger>
            </L.DescriptionWrapper>
          </L.SubWrapper>

          <L.SubWrapper>
            <L.MainPic src="/music-landing/shy.JPG" />
            <L.DescriptionWrapper>
              <L.MainPicDes>{"Shy (eh o)"} </L.MainPicDes>
              <L.MainPicSinger>{"PENOMECO"}</L.MainPicSinger>
            </L.DescriptionWrapper>
          </L.SubWrapper>
        </L.RowOne>

        <L.RowTwo>
          <L.SubWrapper>
            <L.MainPic src="/music-landing/warning.JPG" />
            <L.DescriptionWrapper>
              <L.MainPicDes>{"Warning Sign"} </L.MainPicDes>
              <L.MainPicSinger>{"CADE"}</L.MainPicSinger>
            </L.DescriptionWrapper>
          </L.SubWrapper>

          <L.SubWrapper>
            <L.MainPic src="/music-landing/nwanti.png" />
            <L.DescriptionWrapper>
              <L.MainPicDes>{"love nwantiti (ah ah ah)"} </L.MainPicDes>
              <L.MainPicSinger>{"CKay"}</L.MainPicSinger>
            </L.DescriptionWrapper>
          </L.SubWrapper>
        </L.RowTwo>
      </L.ColumnWrapper>
    </L.Wrapper>
  );
}
