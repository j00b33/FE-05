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

const OutLine = styled.div`
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const SearchBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 20px;
  border: none;
  background-color: black;
  color: white;
  border-bottom: 1px solid white;

  text-align: center;
`;

const Header = styled.div`
  width: 1000px;
  height: 130px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 490px;
`;

const Title1 = styled.div`
  font-family: Impact;
  color: #9900ff;
  font-size: 60px;
`;

const Title2 = styled.div`
  font-family: Impact;
  color: #00eeff;
  font-size: 60px;
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
    <OutLine>
      <Header>
        <Title>
          <Title1>GO MAD</Title1>
          <Title2>COMMUNITY</Title2>
        </Title>
        <SearchBox
          type="text"
          placeholder="🔍 Search the title of the post you're looking for"
          onChange={onChangeSearch}
        />
      </Header>
      <BoardListPage data={data} keyword={keyword} />
      <Pagination refetch={refetch} lastPage={lastPage} keyword={keyword} />
    </OutLine>
  );
}
