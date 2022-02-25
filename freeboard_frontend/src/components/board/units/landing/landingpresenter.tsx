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

        <L.Description>ARE YOU GOING MAD?</L.Description>
      </L.MainWrapper>

      <L.ColumnWrapper>
        <L.ColumnOne>
          <L.SubWrapper>
            <L.MainPic src="/landingpage/picone.png" />
            <L.MainPicDes>{"Find your favorite piercings here"} </L.MainPicDes>
          </L.SubWrapper>

          <L.SubWrapper>
            <L.MainPic src="/landingpage/shopone.png" />
            <L.MainPicDes>
              {"You can find some amazing piercing shops"}{" "}
            </L.MainPicDes>
          </L.SubWrapper>

          <L.SubWrapper>
            <L.MainPic src="/landingpage/pictwo.png" />
            <L.MainPicDes>
              {"What about your own unique piercings?"}{" "}
            </L.MainPicDes>
          </L.SubWrapper>
        </L.ColumnOne>

        <L.Columntwo>
          <L.SubWrapper>
            <L.MainPic src="/landingpage/hand.png" />
            <L.MainPicDes>
              {"You can communicate with others to get information"}{" "}
            </L.MainPicDes>
          </L.SubWrapper>

          <L.SubWrapper>
            <L.MainPic src="/landingpage/epic.png" />
            <L.MainPicDes>
              {"There are diverse types of piercings"}{" "}
            </L.MainPicDes>
          </L.SubWrapper>
        </L.Columntwo>
      </L.ColumnWrapper>

      <L.Footer>
        <L.HomeButton onClick={props.onClickHome}>JOIN US</L.HomeButton>
      </L.Footer>
    </L.Wrapper>
  );
}
