import { gql, useQuery } from "@apollo/client";
import Pagination from "../../../src/components/commons/pagination/01/pagination.container";
import BoardListPage from "../../../src/components/board/units/list/BoardList.container";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import _ from "lodash";

const SearchBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 20px;
  border-radius: 18px;
`;

const Searchtitle = styled.div`
  font-size: 20px;
  margin-right: 15px;
`;
const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function BoardList() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const { data: dataBoardsCount, refetch: searchedRefetch } =
    useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    searchedRefetch: ({ search: data });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <div>
      <Wrapper>
        <Searchtitle>Search 🔍</Searchtitle>
        <SearchBox
          type="text"
          placeholder="Search for the title "
          onChange={onChangeSearch}
        />
      </Wrapper>
      <BoardListPage data={data} keyword={keyword} />
      <Pagination refetch={refetch} lastPage={lastPage} keyword={keyword} />
    </div>
  );
}
