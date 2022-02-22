import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../src/commons/types/generated/types";
import ListSearchPage from "../../../src/components/commons/search/search.container";
import * as L from "./styles";
import styled from "@emotion/styled";
import { useState } from "react";
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

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => props.isMatched && "#b81a39"};
`;

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

export default function productListPage() {
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { page: 1 } });
  const router = useRouter();

  console.log(data);

  function onClickProductsDetail(event) {
    router.push(`/01-01-market/${event.currentTarget.id}`);
  }

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

  return (
    <L.Wrapper>
      <L.Header>
        <L.HeaderTitle>Products</L.HeaderTitle>
        <L.HeaderSubtitle>View other's products!</L.HeaderSubtitle>
      </L.Header>

      <Wrapper>
        <Searchtitle>Search 🔍</Searchtitle>
        <SearchBox
          type="text"
          placeholder="Enter your searching subject"
          onChange={onChangeSearch}
        />
      </Wrapper>

      <L.BoxWrapper>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditems.map((el) => (
            <L.Box id={el._id} key={el._id}>
              <L.LeftSection>
                <L.Date>{el.createdAt.slice(0, 10)}</L.Date>

                <L.Seller>Seller: </L.Seller>

                <L.Product id={el._id} onClick={onClickProductsDetail}>
                  Product:{" "}
                  {el.name
                    .replaceAll(keyword, `#$%${keyword}#$%`)
                    .split("#$%")
                    .map((el) => (
                      <Word key={uuidv4()} isMatched={el === keyword}>
                        {el}
                      </Word>
                    ))}
                </L.Product>

                <L.Remarks>{el.remarks}</L.Remarks>

                <L.Price>${el.price}</L.Price>
              </L.LeftSection>
              <L.RightSection>
                <L.Image
                  src={`https://storage.googleapis.com/${data?.fetchUseditems.images?.[0]}`}
                  width="100px"
                ></L.Image>
              </L.RightSection>
            </L.Box>
          ))}
        </InfiniteScroll>
      </L.BoxWrapper>
    </L.Wrapper>
  );
}
