import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any; //뭐가 더 들어오는지 모르기 때문에 any 사용
};
//window에 있는건 scope로 해서 global에 들어왔음
//

export default function KakaoMapPage() {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  });

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c0430299007ff087ff492512dbb400d8"
        ></script>
      </Head>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
