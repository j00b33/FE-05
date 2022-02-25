import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage() {
  const router = useRouter();

  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };

  return (
    <div>
      {/* <a href="/29-03-kakao-map-routed">맵으로 이동하기</a> 로 하는 방법도
      있지만 */}
      {/* <button onClick={onClickMoveToMap}>Move to Map</button> ...// 아래 방법 사용하면 router.push 사용 안해도 됨 */}
      <Link href="/29-03-kakao-map-routed">
        <a>Move to Map</a>
        {/* a태그로 감싸놓긴 했지만 a태그의 기능은 아님 (검색봇을 위한 태그)*/}
      </Link>
    </div>
  );
}
