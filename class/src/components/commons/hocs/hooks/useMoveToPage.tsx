import { useRouter } from "next/router";
import { useState } from "react";

type IPage = "/board" | "/market" | "/myPage";
//--> union type

// interface AAA{
//     name: string
//     age: number
// }

// interface AAA {
//     school: string
// }
//안에 있는 내용들이 AAA로 합쳐짐
//--> 선언 /변언

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPaged] = useState("/");
  //시작점 = route = "/"
  const moveToPage = (page: IPage) => () => {
    setVisitedPaged(page);
    router.push(page);
  };

  return { moveToPage, visitedPage };
}
