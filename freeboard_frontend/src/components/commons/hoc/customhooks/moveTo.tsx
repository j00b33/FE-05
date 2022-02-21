import { useRouter } from "next/router";
import { useState } from "react";

type IPage =
  | "/01-01-market/create"
  | "/01-01-market/list"
  | "/01-01-market/detail";

export function useMove() {
  const router = useRouter();
  const [visitedPage, setVisitedPaged] = useState("/");
  //시작점 = route = "/"
  console.log("===============");
  console.log(visitedPage);
  const moveTo = (page: IPage) => () => {
    setVisitedPaged(page);
    router.push(page);
  };

  return { moveTo, visitedPage };
}
