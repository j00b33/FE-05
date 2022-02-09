import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  //<string | undefined>
  //이건 스트링이나 undefined로 타입을 지정하는거
  const [keyword, setKeyword] = useState("");
  //search button을 클릭했을때 실행되게끔

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  //여기서 data는 global state

  const onClickSearch = () => {
    refetch({ search: search, page: 1 });
    //refetch 할때 페이지를 1로 이동한걸 refetch

    //입력했을때 state에 임시로 저장을 해놨는데 이게 검색버튼을 클릭하지 않아도 페이지네이션만 하면 자꾸 그 검색어로 넘어갔음
    //그래서 search에 제모깅라고 하고 검색버튼 누르는 순간 keyword에 제목이라고 저장을 해두는것
    //이는 검색버튼을 누르게 하기 위해 만드는것
    //이러면 다른 페이지를 눌러도 이전 검색어가 검색되지 않는거임

    setKeyword(search);
    //그래서 search를 넘겨주는거임 키워드에
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element) {
      refetch({ search: keyword, page: Number(event.target.id) });
      //우리가 검색한 검색어의 특정페이지
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input type="text/>" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>Search</button>

      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer} </span>
          {"   "}
          <span> {el.title}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {` ${index + 1} `}
        </span>
      ))}
    </div>
  );
}
