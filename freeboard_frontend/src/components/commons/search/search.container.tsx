import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useState } from "react";
import { FETCH_USED_ITEMS } from "../../../../pages/01-01-market/list";
import { IQuery } from "../../../commons/types/generated/types";
import ListSearchUIPage from "./search.presenter";

export default function ListSearchPage() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });
  const { data: dataBoardsCount, refetch: searchedRefetch } =
    useQuery(FETCH_USED_ITEMS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    searchedRefetch: ({ search: data });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };

  return <ListSearchUIPage onChangeSearch={onChangeSearch} />;
}
