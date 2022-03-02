import * as L from "./landingstyles";

export default function LandingUIPage(props) {
  return (
    <L.Wrapper>
      <L.TopBox>
        <L.TopBoxLetter>GO MAD</L.TopBoxLetter>
      </L.TopBox>
      <L.TopLine />
      <L.TopLine />

      <L.MainWrapper>
        <L.MainSubWrapper>
          <L.MainTitleOne>WE ARE</L.MainTitleOne>
          <L.Space> </L.Space>
          <L.MainTitleTwo> MAD SCIENTISTS</L.MainTitleTwo>
        </L.MainSubWrapper>

        <L.Description>Share Your Music Tastes</L.Description>
      </L.MainWrapper>

      <L.ColumnWrapper>
        <L.ColumnOne>
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
        </L.ColumnOne>

        <L.Columntwo>
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
        </L.Columntwo>
      </L.ColumnWrapper>

      <L.Footer>
        <L.HomeButton onClick={props.onClickHome}>EXPLORE</L.HomeButton>
      </L.Footer>
    </L.Wrapper>
  );
}
