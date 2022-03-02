import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";
import ListUIPage from "./list.presenter";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      images
      price
      seller {
        name
      }
      createdAt
    }
  }
`;

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      price
      contents
      remarks
      createdAt
      images
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        name
      }
    }
  }
`;

export default function ListcontainerPage() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { page: 1 } });

  const { data: itemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productDetail) },
  });

  console.log(data);

  const onClickProductsDetail = (el) => (event) => {
    const viewed = JSON.parse(localStorage.getItem("today i viewed") || "[]");

    if (!JSON.stringify(localStorage).includes(el._id)) {
      viewed.push(el);
    }

    localStorage.setItem("today i viewed", JSON.stringify(viewed));

    //원래 onClickProductsDetail 들어가는 버튼
    router.push(`/01-01-market/${event.currentTarget.id}`);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  //search
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    searchedRefetch: ({ search: data });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };

  const onClickMoveToUpload = () => {
    router.push("/01-01-market/create");
  };
  return (
    <ListUIPage
      data={data}
      onChangeSearch={onChangeSearch}
      onLoadMore={onLoadMore}
      onClickProductsDetail={onClickProductsDetail}
      keyword={keyword}
      onClickMoveToUpload={onClickMoveToUpload}
    />
  );
}
