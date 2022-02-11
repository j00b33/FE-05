import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "blue" : "black")};
`;

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element) {
      refetch({ search: keyword, page: Number(event.target.id) });
    }
  };

  return (
    <div>
      <h1>Search Page 🧐</h1>
      <input type="text/>" onChange={onChangeSearch} />

      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer} </span>
          {"   "}
          <span>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={el === keyword}>
                  {el}
                </Word>
              ))}
          </span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {` ${index + 1} `}
        </span>
      ))}
    </div>
  );
}
