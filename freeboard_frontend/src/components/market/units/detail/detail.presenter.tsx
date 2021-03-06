import * as D from "./detail.styles";
import { Tooltip } from "antd";
import { VscLocation } from "react-icons/vsc";
import { FaMoneyCheck, FaRegEdit } from "react-icons/fa";
import {
  RiDeleteBinLine,
  RiFileList3Line,
  RiFileMusicLine,
} from "react-icons/ri";
import Dompurify from "dompurify";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GiBottledShadow } from "react-icons/gi";
import ViewedPage from "../../../../../pages/01-01-market/today";
import { IoPersonOutline } from "react-icons/io5";

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
        geocoder.addressSearch(
          props.data?.fetchUseditem?.useditemAddress?.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              // 결과값으로 받은 위치를 마커로 표시
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data]);

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
          <D.Product>
            <RiFileMusicLine /> {props.data?.fetchUseditem?.name}
          </D.Product>
          <D.SecondRow>
            <D.Price>{props.data?.fetchUseditem?.price}₩</D.Price>
            <D.SecondInner>
              <D.Date>
                {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
              </D.Date>
              <D.LocationWrapper>
                <Tooltip
                  color="#9900ff"
                  font-size="16px"
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
              <IoPersonOutline /> {props.data?.fetchUseditem?.seller.name}
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
            <D.Pin
              onClick={props.onClickPin}
              style={{ color: props.isPicked ? "#09ff00" : "grey" }}
            >
              {GiBottledShadow}
            </D.Pin>
            <D.List onClick={props.onClickList}>{RiFileList3Line}</D.List>
            <D.Edit onClick={props.onClickMoveToEdit}>{FaRegEdit}</D.Edit>
            <D.Delete onClick={props.onClickDelete}>{RiDeleteBinLine}</D.Delete>
          </D.Update>
          <D.PickCount>{props.data?.fetchUseditem?.pickedCount}</D.PickCount>
        </D.ThirdLeft>
        <D.Map id="map" style={{ width: "500px", height: "350px" }} />

        <D.ThirdRight></D.ThirdRight>
      </D.ThirdWrapper>
      <D.CommentDivision />

      <ViewedPage />

      <D.CommentDivision />
    </D.Wrapper>
  );
}
