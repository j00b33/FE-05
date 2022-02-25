import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any; //뭐가 더 들어오는지 모르기 때문에 any 사용
};
//window에 있는건 scope로 해서 global에 들어왔음
//

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=49d3c5429e18c3d510e928134b830407&autoload=false";
    //? --> 객체에 두개를 넣어서 문자열 형태로 넣어서 보내는거
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        //필요한 페이지에서 좀 기다렸다가 받기
        //script가 다 로드가 되면 이거 실행
        //직접 다운로드 받고, 다 받을떄까지 기다렸다가 그려주기
        const container = document.getElementById("map");
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다 (마커 생성)
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 클릭 이벤트를 등록
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      }),
        [];
    };
  });
  return (
    <div>
      {/* <Head>    //위에서 직접 만들어버려 // 다운ㄷ로드 될떄까지 기다려야하기 때문임
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=49d3c5429e18c3d510e928134b830407"
        ></script>
      </Head> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
