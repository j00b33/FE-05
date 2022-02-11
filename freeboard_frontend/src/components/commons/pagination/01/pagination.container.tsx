import { useState } from "react";
import { useRouter } from "next/router";
import * as P from "./pagination.styles";
import { MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Pagination(props) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  function onClickMoveToBoardNew() {
    router.push("/01-01-board/new");
  }

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element) {
      props.refetch({ search: props.keyword, page: Number(event.target.id) });
    }
    setCurrentPage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    console.log(startPage);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) {
      return;
    }
    setStartPage((Prev) => Prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <P.Wrapper>
      <P.TextList>
        {props.startPage !== 1 && (
          <P.NextPage onClick={onClickPrevPage}>＜</P.NextPage>
        )}

        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= props.lastPage && (
              <P.Pages
                key={uuidv4()}
                onClick={onClickPage}
                id={String(index + startPage)}
                className={index + startPage === currentPage ? "isNow" : ""}
              >
                {` ${index + startPage} `}
              </P.Pages>
            )
        )}
        {startPage + 10 > props.lastPage || (
          <P.NextPage onClick={onClickNextPage}>＞</P.NextPage>
        )}
      </P.TextList>

      <P.ListButton>
        <P.Button onClick={onClickMoveToBoardNew}>Create</P.Button>
      </P.ListButton>
    </P.Wrapper>
  );
}
