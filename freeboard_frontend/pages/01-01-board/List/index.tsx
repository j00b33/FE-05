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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const SearchBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 20px;
  border: 1px solid #818181;
`;

// const Searchtitle = styled.div`
//   font-size: 20px;
//   margin-right: 15px;
// `;
const Wrapper = styled.div`
  margin-top: 100px;
  width: 1000px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Header = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  width: 450px;
`;

const Title1 = styled.div`
  font-size: 45px;
  font-family: "CodaCaption";
  color: #9900ff;
`;

const Title2 = styled.div`
  font-size: 45px;
  font-family: "CodaCaption";
  color: #09ff00;
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
      <Wrapper>
        <Header>
          <Title>
            <Title1>Community</Title1>
            <Title2>Zone</Title2>
          </Title>
          <SearchBox
            type="text"
            placeholder="Enter the title of the post that you are looking for here"
            onChange={onChangeSearch}
          />
        </Header>
      </Wrapper>
      <BoardListPage data={data} keyword={keyword} />
      <Pagination refetch={refetch} lastPage={lastPage} keyword={keyword} />
    </OutLine>
  );
}
