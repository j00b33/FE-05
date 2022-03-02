import axios from "axios";
import { useEffect } from "react";

export default function OpenGraphPreviewPage() {
  useEffect(() => {
    const getOpenGraph = async () => {
      const result = await axios.get("https://www.gmarket.co.kr/"); //daum.net 등은 CORS 차단 당함으로 백엔드에서 요청하는것이 일반적
      console.log(result.data);
      //   console.log(
      //     result.data.split("<meta").filter((el) => el.includes("og:"))
      //   );
      const opengraph = result.data
        .split("<meta ")
        .filter((el) => el.includes("og:url"))[0]
        .split(" ");
      console.log(
        opengraph[1].replaceAll('content="', "").replaceAll('"/>', "")
      );
    };
    getOpenGraph();
  }, []);
  return <div></div>;
}
//디스코드 개발자
//cors가 차단되지 않은 사이트만 가능하기 떄문에 주로 백엔드에서 요청함
