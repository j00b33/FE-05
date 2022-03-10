import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GiBottledShadow } from "react-icons/gi";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../src/commons/types/generated/types";
import * as P from "./styled";

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String!, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      images
    }
  }
`;

export default function PinPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });

  const router = useRouter();
  const onClickMoveToDetail = (event) => {
    router.push(`/01-01-market/${event.currentTarget.id}`);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemsIPicked.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsIPicked) {
          return { fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked] };
        }
        return {
          fetchUseditemsIPicked: [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ],
        };
      },
    });
  };
  return (
    <P.Wrapper>
      <P.Title>
        <GiBottledShadow />
        Pinned Products
      </P.Title>

      <P.PinWrapper>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditemsIPicked.map((el, index) => (
            <P.SinglePin key={index} id={el._id} onClick={onClickMoveToDetail}>
              <P.Image
                src={`https://storage.googleapis.com/${el.images[0]}`}
                height="200px"
                onError={(e) => (e.currentTarget.src = "/empty.png")}
              />
              <P.Text>
                {el.name.length > 19 ? `${el?.name.slice(0, 20)}...` : el?.name}
              </P.Text>
              <P.Text>{el?.price}₩</P.Text>
            </P.SinglePin>
          ))}
        </InfiniteScroll>
      </P.PinWrapper>
    </P.Wrapper>
  );
}
