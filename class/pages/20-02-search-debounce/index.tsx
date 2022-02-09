import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

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

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);
  //마지막 작업이 끝나고 0.2초간 시간 후에 실행되는

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event?.target.value);
    //debounce 실행시키기
    getDebounce(event.target.value);

    // refetch({ search: event.target.value, page: 1 });
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
