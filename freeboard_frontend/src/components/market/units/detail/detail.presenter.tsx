import * as D from "./detail.styles";
import { Tooltip } from "antd";
import { VscLocation } from "react-icons/vsc";
import { FaMoneyCheck, FaRegEdit } from "react-icons/fa";
import { GiSafetyPin } from "react-icons/gi";
import { RiDeleteBinLine, RiFileList3Line } from "react-icons/ri";
import Dompurify from "dompurify";
import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any; //뭐가 더 들어오는지 모르기 때문에 any 사용
};

export default function ProductDetailUIPage(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=49d3c5429e18c3d510e928134b830407&libraries=services&autoload=false ";
    //`?` --> 객체에 두개를 넣어서 문자열 형태로 넣어서 보내는거
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도 생성
        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        const geocoder = new window.kakao.maps.services.Geocoder();

        //주소로 좌표 검색
        geocoder.addressSearch(props.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
          }
        });
      });
    };
  }),
    [props.address];
  return (
    <D.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <D.MainDetail>
        <D.LeftDetail>
          <D.MainPic
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
            onError={(e) => (e.currentTarget.src = "/empty.png")}
            width="500px"
          />
        </D.LeftDetail>

        <D.RightDetail>
          <D.Product>{props.data?.fetchUseditem?.name}</D.Product>
          <D.SecondRow>
            <D.Price>${props.data?.fetchUseditem?.price}</D.Price>
            <D.SecondInner>
              <D.Date>
                {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
              </D.Date>
              <D.LocationWrapper>
                <Tooltip
                  color="#b81a39"
                  font-size="16px"
                  font-family="Cochin"
                  title={`${props.data?.fetchUseditem.useditemAddress?.address} 
                      ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
                >
                  <D.AddressTool>
                    <VscLocation />
                  </D.AddressTool>
                </Tooltip>
              </D.LocationWrapper>
            </D.SecondInner>
          </D.SecondRow>

          <D.DivisionL />

          <D.ContentWrapper>
            <D.Seller>
              Seller: {props.data?.fetchUseditem?.seller.name}
            </D.Seller>
            <D.Remarks>{props.data?.fetchUseditem?.remarks}</D.Remarks>
            {process.browser && (
              <D.MyContents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              />
            )}
          </D.ContentWrapper>

          <D.DivisionL />
        </D.RightDetail>
      </D.MainDetail>

      <D.ThirdWrapper>
        <D.ThirdLeft>
          <D.Update>
            <D.Pay onClick={props.onClickPay}>{FaMoneyCheck}</D.Pay>
            <D.Pin>{GiSafetyPin}</D.Pin>
            <D.List onClick={props.onClickList}>{RiFileList3Line}</D.List>

            <D.Edit onClick={props.onClickMoveToEdit}>{FaRegEdit}</D.Edit>
            <D.Delete onClick={props.onClickDelete}>{RiDeleteBinLine}</D.Delete>
          </D.Update>
        </D.ThirdLeft>

        <D.ThirdRight>
          <D.Map id="map" style={{ width: "500px", height: "350px" }} />
        </D.ThirdRight>
      </D.ThirdWrapper>

      <D.CommentDivision />
    </D.Wrapper>
  );
}
